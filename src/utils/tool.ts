export const createHeadersByContext = (req?: any, option?: any) => {
    const requestHeaders: Headers | any = {};
    try {
      if (req) {
        requestHeaders['x-request-type'] = 'server';
      } else {
        requestHeaders['x-request-type'] = 'client';
      }
      requestHeaders['anonymous-Id'] = '2e6c8a0e-f3f6-4172-8758-04e76567eb3b';
      requestHeaders['accept-language'] = 'en-US';
      requestHeaders['x-client-type'] = 'PC';
      requestHeaders['x-language-id'] = '1';
      requestHeaders['x-site-suffix'] = 'com';
      requestHeaders['x-obuy-suffix'] = 'com';
    } catch (error) {
      console.warn('create headers error: ', error);
    }
    return requestHeaders;
  };