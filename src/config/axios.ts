export const axiosConfig = {
    baseConfig: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      params: {},
      data: {},
      timeout: 60 * 1000,
      withCredentials: true,
      responseType: 'json',
      validateStatus(status: number) {
        return status >= 200 && status < 300;
      },
    },
    interceptors: {
      request: {
        onFulfilled: (config: any) => {
          config.timeout = 60 * 1000;
          return config;
        },
        onRejected: (error: any) => {
          return Promise.reject(error);
        },
      },
      response: {
        onFulfilled: (res: any) => {
          const xhr = res.request;
          if (xhr.readyState === 4) {
            if (res.status === 200 && res.data?.code === '200') {
              return Promise.resolve(res.data);
            } else {
              // toast?.error(res.data?.msg, { position: toast.POSITION.TOP_CENTER, autoClose: 5000, hideProgressBar: true });
              return Promise.reject(new Error(res.data?.msg || '网络异常，请稍后重试！'));
            }
          } else {
            return Promise.reject(xhr);
          }
        },
        onRejected: (error: any) => {
          if (error && error.response) {
            const res = {
              code: error.response.status,
              message: error.response,
            };
            return Promise.reject(res);
          }
          return Promise.reject(error);
        },
      },
    },
  };
