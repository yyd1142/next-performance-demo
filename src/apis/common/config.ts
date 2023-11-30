import { actions } from 'src/store/app';
import { createHeadersByContext } from 'src/utils';
import { commonApi } from './apis';

/** _app.tsx 所需要请求的接口 */
export const fetchAppData = async (ctx: AppContext) => {
  try {
    const { reduxStore, req } = ctx;
    const { dispatch } = reduxStore;
    const requestHeaders: Headers = createHeadersByContext(req);

    const topNavBar = await commonApi.getTopNavBarList(requestHeaders);
    if (topNavBar?.code === '200' && topNavBar?.data) {
      dispatch(actions.setNavigationList(topNavBar?.data));
    }

    const config = await commonApi.getMallBaseConfig(requestHeaders);
    if (config?.code === '200' && config?.data) {
      dispatch(actions.setMallBaseConfig(config?.data));
    }

    const bottomBar = await commonApi.getBottomBarList(requestHeaders);
    if (bottomBar?.code === '200' && bottomBar?.data) {
      dispatch(actions.setBottomList(bottomBar?.data));
    }
  } catch (error) {
    console.log(error);
  }
};
