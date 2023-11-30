import type { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageBanner from 'src/components/ImageBanner';
import SwiperBanner from 'src/components/SwiperBanner';
import { actions } from 'src/store/app';
import { StyledHomeWrapper } from 'src/styled/home';

const HomePage: NextPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleLoadMore = () => {
    setOpen(true);
    dispatch(actions.setIsShowFooter(true));
  };
  return (
    <StyledHomeWrapper>
      <SwiperBanner src="https://fr.olicdn.com/image/warrior-x-4-1440x500-1-hnayjf.jpg" />
      <SwiperBanner src="https://au.olicdn.com/image/new-xybs-ydgg-1440-q1espq.jpg" />
      {open && <ImageBanner />}
    </StyledHomeWrapper>
  );
};

export default HomePage;
