declare namespace NodeJS {
    export interface ProcessEnv {
      BASE_URL: string;
      PWA_URL: string;
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_CDN_URL: string;
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_APP_PORT: string;
      REACT_APP_BUNDLE_VISUALIZE: string;
    }
  }