import { actions } from 'src/store/app';
import { createHeadersByContext } from 'src/utils';
import { commonApi } from './apis';

/** _app.tsx 所需要请求的接口 */
export const fetchAppData = async (ctx: AppContext) => {
  try {
    const { reduxStore, req } = ctx;
    const { dispatch } = reduxStore;
    const state: State = reduxStore.getState();
    const requestHeaders: Headers = createHeadersByContext(req);
    // 获取导航栏数据
    const topNavBar = await commonApi.getTopNavBarList(requestHeaders);
    const cupTopNavBar = topNavBar.data.splice(0, 9); // 只取前9个
    dispatch(actions.setNavigationList(cupTopNavBar));

    // 获取基础配置
    const config = await commonApi.getMallBaseConfig(requestHeaders);
    dispatch(actions.setMallBaseConfig(config?.data));
  } catch (error) {
    console.log(error);
  }
};
