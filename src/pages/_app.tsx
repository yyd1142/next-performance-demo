import { CacheProvider, ThemeProvider } from '@emotion/react';
import { createEmotionCache } from 'src/hooks';
import { theme } from 'src/config';
import { Layout, HtmlFontSizeScript, GlobalStyled } from 'src/components';

// Client-side cache, shared for the whole session of the user in the browser.
const clientEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientEmotionCache, pageProps }: any) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* html font-size 响应式脚本 */}
        <HtmlFontSizeScript />
        {/* 全局reset.css */}
        <GlobalStyled />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: any) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

  return {
    pageProps: { ...pageProps },
  };
};

export default App;
