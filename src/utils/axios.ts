import axios from 'axios';
import isObject from 'lodash/isObject';
import qs from 'qs';
import { axiosConfig } from 'src/config';
import type { CreateAxiosDefaults, AxiosRequestConfig } from 'axios';
import { createHeadersByContext } from './tool';

const inBrowser = typeof window !== 'undefined';

export interface Options extends AxiosRequestConfig {
  hideError?: boolean; // 是否显示错误Toast
  ssr?: boolean; // 是否是服务端请求
  formData?: FormData;
  manual?: boolean; // 是否手动判断接口返回结果
  mode?: string; // 跨域请求 no-cors, cors, same-origin
  /** 是否需要缓存接口数据，一些不经常变动接口建议开启 */
  cache?: boolean;
  /** 缓存过期时间，cache必须为true才生效 */
  cacheExpires?: number;
  /** 请求头部 */
  headers?: { [key: string]: string } | any;
  /** 需要游客id请求头 */
  tourist?: boolean;
  /** 是否添加loading */
  loading?: boolean;
  delay?: number; // 延时单位毫秒
}

const { baseConfig, interceptors } = axiosConfig;
const { request: requestInterceptors, response: responseInterceptors } = interceptors;

export const request = async (url: string, options?: Options) => {
  const isServer: boolean = typeof window === 'undefined';
  const URL: string = isServer
    ? `http://127.0.0.1:${process.env.NEXT_PUBLIC_APP_PORT}`
    : window.location.origin;
  const baseURL: string = `${URL}/api`;
  const cancelTokenSource = axios.CancelToken.source();

  const instance = axios.create({
    ...(baseConfig as CreateAxiosDefaults),
    baseURL,
    cancelToken: cancelTokenSource.token,
  });
  const config: AxiosRequestConfig = { url, data: {}, params: {}, ...options };
  const method = options?.method ?? 'GET';
  if (options?.data) {
    switch (method) {
      case 'POST':
      case 'PUT':
        config.data = options.data;
        break;
      case 'DELETE':
      case 'GET':
        config.params = options.params;
        break;
      default:
        break;
    }
  }
  if (options?.formData) {
    config.data = options?.formData;
  }

  // 添加请求拦截器
  instance.interceptors.request.use((config: any) => {
    const customerHeaders = createHeadersByContext(undefined);
    config.headers = Object.assign(config.headers, { ...customerHeaders });
    config.headers['X-Real-Platform'] = 'omall';
    config.headers['anonymous-Id'] = '2e6c8a0e-f3f6-4172-8758-04e76567eb3b';
    // 合并接口处理
    if (config?.url === '/combine' && options?.headers && Object.keys(options.headers).length) {
      config.headers = Object.assign(config.headers, { ...options?.headers });
      delete config.data;
    }

    if (method === 'DELETE' && !config.data) delete config.data;

    if (options?.formData) {
      config.headers['Content-Type'] = 'multipart/form-data;charset=utf-8';
    } else {
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
    }

    return config;
  }, requestInterceptors.onRejected);
  // 添加响应拦截器
  instance.interceptors.response.use((res: any) => {
    const xhr = res.request;
    if (res && !res.data) res.data = {};
    if (!inBrowser || xhr.readyState === 4) {
      if (res.status === 200) {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.resolve({});
      }
    }
    return Promise.reject(xhr);
  }, responseInterceptors.onRejected);

  return instance.request(config);
};

export const fetchRequest = async (url: string, options?: Options) => {
  const otherOptions: any = { ...options };
  const isServer: boolean = typeof window === 'undefined';
  const URL: string = isServer
    ? `http://127.0.0.1:${process.env.NEXT_PUBLIC_APP_PORT}`
    : window.location.origin;
  const baseURL: string = `${URL}/api`;

  otherOptions.headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'X-Real-Platform': '1',
  };

  if (options?.headers) {
    otherOptions.headers = Object.assign(otherOptions.headers, { ...options?.headers });
  }

  if (options?.data) {
    otherOptions.body = JSON.stringify(options?.data);
    delete otherOptions?.data;
  }
  if (options?.params) {
    const query = qs.stringify(options.params);
    url = url.includes('?') ? `${url}${query}` : `${url}?${query}`;
  }
  if (options?.formData) {
    otherOptions.body = options.formData;
    otherOptions.headers['Content-Type'] = 'multipart/form-data;charset=utf-8';
  }

  const fetchUrl = `${inBrowser ? '' : baseURL}${url}`;

  let data: any = null;
  // Solve the fetch cache option not be 'false'
  otherOptions.cache = 'no-cache';
  const response = await fetch(fetchUrl, { ...otherOptions });
  if (options?.responseType === 'blob') {
    data = await response.blob();
  } else {
    data = await response.json();
  }
  return data;
};

export const $get = async (url: string, config?: Options) => {
  if (!inBrowser || config?.mode) {
    return fetchRequest(url, { ...config, method: 'GET' });
  }
  return request(url, { ...config, method: 'GET' });
};

export const $post = async (url: string, config?: Options) => {
  if (!inBrowser || config?.mode) {
    return fetchRequest(url, { ...config, method: 'POST' });
  }
  return request(url, { ...config, method: 'POST' });
};

export const $delete = async (url: string, config?: Options) => {
  if (!inBrowser || config?.mode) {
    return fetchRequest(url, { ...config, method: 'DELETE' });
  }
  return request(url, { ...config, method: 'DELETE' });
};

export const $put = async (url: string, config?: Options) => {
  if (!inBrowser || config?.mode) {
    return fetchRequest(url, { ...config, method: 'PUT' });
  }
  return request(url, { ...config, method: 'PUT' });
};
