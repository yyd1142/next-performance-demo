import { createSlice } from '@reduxjs/toolkit';

type AppState = State['app'];

export const slice = createSlice({
  name: 'app',
  initialState: {
    mallBaseConfig: null,
    isMobile: true,
    deviceType: 'H5',
    navigationList: [],
  } as AppState,
  reducers: {
    setIsMobile: (state: AppState, { payload }) => {
      state.isMobile = payload;
    },
    setNavigationList: (state: AppState, { payload }) => {
      state.navigationList = payload;
    },
    setDeviceType: (state: AppState, { payload }) => {
      state.deviceType = payload;
    },
    setMallBaseConfig: (state: AppState, { payload }) => {
      state.mallBaseConfig = payload;
    },
  },
});
