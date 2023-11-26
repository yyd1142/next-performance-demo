import type { NextApiRequest, NextApiResponse } from 'next/types';
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy: any = createProxyMiddleware({
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    '^/api': '/',
  },
  router: async () => {
    return process.env.NEXT_PUBLIC_API_URL;
  },
} as any);

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // 防止直接访问/api/rest, 需要在axios增加一个'x-platform''
  if (req.headers['x-real-platform']) {
    apiProxy(req, res, (result: unknown) => {
      if (result instanceof Error) {
        throw result;
      }

      throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
  } else {
    res.redirect(307, '/');
  }
};

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default handler;
