import React, { FC, useEffect, useState } from 'react';
import { StyledSwiperBanner } from './styled';
import BaseImage from '../BaseImage';

interface SwiperBannerProps {
  src: string;
}

const SwiperBanner: FC<SwiperBannerProps> = ({ src }) => {
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 2500);
  // }, []);
  return (
    <StyledSwiperBanner>
      {open && <BaseImage src={src} width={1400} height={600} quality={80} alt="" />}
    </StyledSwiperBanner>
  );
};

export default SwiperBanner;
