interface LayoutProps {
  children: any;
}

interface AppContext {
  pathname?: string;
  req: any;
  res: any;
  reduxStore: any;
  pathname?: string;
}

interface ImageLoaderProps {
  src: string;
  width: number;
  quality: number;
}
