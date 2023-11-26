import { NextResponse, userAgent } from 'next/server';
import type { NextRequest, NextMiddleware } from 'next/server';

export const middleware: NextMiddleware = (request: NextRequest) => {
  const { nextUrl, headers } = request;
  const requestHeaders = new Headers(headers);

  try {
    const { isBot, device, ua } = userAgent(request);
    const { type, model } = device;
    const isSafari: boolean = /^((?!chrome|android).)*safari/i.test(ua);
    const isGoogleBolt: boolean = ua.indexOf('Googlebot') > -1;
    let deviceType: string = device.type === 'mobile' ? 'H5' : 'PC';

    switch (type) {
      case 'mobile':
        deviceType = 'H5';
        break;
      case 'tablet':
        deviceType = model === 'iPad' ? 'iPad' : 'PC';
        break;
      default:
        deviceType = device.type === 'mobile' ? 'H5' : 'PC';
        break;
    }

    if (isGoogleBolt) deviceType = 'PC';
    requestHeaders.set('x-is-bot', isBot ? 'BOT' : ''); // 是否爬虫
    requestHeaders.set('x-device-type', deviceType); // 设备类型
    if (isSafari) requestHeaders.set('x-is-safari', '1'); // 是否为Safari
  } catch (error) {
    console.warn(error);
  }

  // 图片验证码需要设置headers
  if (nextUrl.href.includes('/customer/api/') || nextUrl.href.includes('/api/file/api/upload')) {
    requestHeaders.set('X-Real-Platform', 'omall');
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
};
