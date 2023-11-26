// eslint-disable-next-line import/named
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from 'src/store';
import { createLogger } from 'redux-logger';

type InitStore = (reduxState?: any) => any;

const reduxKey: any = '__REACT_REDUX_STORE__';
const isLogger: boolean = process.env.NEXT_PUBLIC_REDUX_LOGGER === '1';
const isProd: boolean = process.env.NODE_ENV === 'production';

const initializeStore: InitStore = (preloadedState: any) => {
  const middleware: any = [];
  const logger = createLogger({
    collapsed: false,
  });

  if (isLogger) middleware.push(logger);

  return configureStore({
    reducer: combineReducers(reducer),
    devTools: !isProd,
    preloadedState,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middleware,
    ],
  });
};

export const initRedux = (reduxState?: any) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return initializeStore(reduxState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[reduxKey]) {
    window[reduxKey] = initializeStore(reduxState);
  }

  return window[reduxKey];
};
