import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { H5_MEDIA } from 'src/config';
import { actions } from 'src/store/app';

const AppDeviceType = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(H5_MEDIA, { noSsr: true });

  useEffect(() => {
    const setStoreState = () => {
      try {
        const deviceType: string = isMobile ? 'H5' : 'PC';
        dispatch(actions.setDeviceType(deviceType));
        dispatch(actions.setIsMobile(isMobile));
      } catch (error) {
        console.warn(error);
      }
    };
    setStoreState();
  }, [ isMobile]);

  return null;
};

export default memo(AppDeviceType);
