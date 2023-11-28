import { createSlice } from '@reduxjs/toolkit';

type AppState = State['app'];

export const slice = createSlice({
  name: 'app',
  initialState: {
    mallBaseConfig: null,
    isMobile: true,
    deviceType: 'H5',
    navigationList: [],
    bottomList: [],
    isShowFooterBar: false,
  } as AppState,
  reducers: {
    setIsMobile: (state: AppState, { payload }) => {
      state.isMobile = payload;
    },
    setNavigationList: (state: AppState, { payload }) => {
      state.navigationList = payload;
    },
    setBottomList: (state: AppState, { payload }) => {
      state.bottomList = payload;
    },
    setDeviceType: (state: AppState, { payload }) => {
      state.deviceType = payload;
    },
    setMallBaseConfig: (state: AppState, { payload }) => {
      state.mallBaseConfig = payload;
    },
    setIsShowFooter: (state: AppState, { payload }) => {
      state.isShowFooterBar = payload;
    },
  },
});
