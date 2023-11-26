import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentProps, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from 'src/hooks';

interface AppDocumentProps extends DocumentProps {
  deviceType: string;
  emotionStyleTags: JSX.Element[];
}

const AppDocument = ({ deviceType, emotionStyleTags }: AppDocumentProps) => {
  return (
    <Html lang="en" style={{ fontSize: deviceType === 'H5' ? '50px' : '100px' }}>
      <Head>
        <meta name="emotion-insertion-point" content="" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        {/* Inject MUI styles first to match with the prepend: true configuration. */}
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props: any) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    deviceType: ctx.req?.headers['x-device-type'] ?? 'PC',
    emotionStyleTags,
  };
};

export default AppDocument;
