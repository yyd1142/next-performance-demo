import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Provider as ReduxProvider } from 'react-redux';
import { createEmotionCache } from 'src/hooks';
import { theme } from 'src/config';
import { Layout, HtmlFontSizeScript, GlobalStyled, AppDeviceType } from 'src/components';
import { withRedux } from 'src/provider';
import { fetchAppData } from 'src/apis';
import { actions } from 'src/store/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientEmotionCache, pageProps, reduxStore }: any) => {
  return (
    <ReduxProvider store={reduxStore}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* html font-size 响应式脚本 */}
          <HtmlFontSizeScript />
          {/* 客户端设置isMobile deviceType */}
          <AppDeviceType />
          {/* 全局reset.css */}
          <GlobalStyled />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </ReduxProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: any) => {
  const { reduxStore } = ctx || {};
  const { dispatch } = reduxStore;
  // 是否爬虫
  const isBot = ctx.req?.headers['x-is-bot'];
  const deviceType: string = ctx.req?.headers['x-device-type'];
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

  dispatch(actions.setDeviceType(deviceType));
  dispatch(actions.setIsMobile(deviceType === 'H5'));
  await fetchAppData(ctx);
  return {
    pageProps: { ...pageProps },
  };
};

export default withRedux(App);
