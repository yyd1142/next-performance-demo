import { $get, $post } from 'src/utils';

export const commonApi = {
  /** 导航栏列表 */
  getTopNavBarList: (headers?: Headers) => {
    return $get('/config/api/navigation/list', { headers });
  },
  /** 基本配置 */
  getMallBaseConfig: (headers?: Headers) => {
    return $get('/config/api/systemParameters/getMallConfig', { headers });
  },
};
