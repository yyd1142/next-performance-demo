import { actions } from 'src/store/app';
import { createHeadersByContext } from 'src/utils';
import { commonApi } from './apis';

/** _app.tsx 所需要请求的接口 */
export const fetchAppData = async (ctx: AppContext) => {
  try {
    const { reduxStore, req } = ctx;
    const { dispatch } = reduxStore;
    const requestHeaders: Headers = createHeadersByContext(req);

    const topNavBarP = commonApi.getTopNavBarList(requestHeaders);
    const configP = commonApi.getMallBaseConfig(requestHeaders);
    const bottomP = commonApi.getBottomBarList(requestHeaders);
    const tasks = [topNavBarP, configP, bottomP];

    const results = await Promise.allSettled(tasks).then((results): any[] =>
      results.map((result) => {
        if (result.status === 'fulfilled' && result.value) {
          return result.value;
        }
        if (result.status === 'rejected' && result.reason) {
          return result.reason;
        }
      })
    );

    const [topNavBar, config, bottomBar] = results;

    if (topNavBar?.code === '200' && topNavBar?.data) {
      const cupTopNavBar = topNavBar?.data.splice(0, 9); // 只取前9个
      dispatch(actions.setNavigationList(cupTopNavBar));
    }

    if (config?.code === '200' && config?.data) {
      dispatch(actions.setMallBaseConfig(config?.data));
    }

    if (bottomBar?.code === '200' && bottomBar?.data) {
      dispatch(actions.setBottomList(bottomBar?.data));
    }
  } catch (error) {
    console.log(error);
  }
};
