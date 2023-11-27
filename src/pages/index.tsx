import type { NextPage } from 'next';
import { ImageBanner } from 'src/components/ImageBanner';
import { StyledHomeWrapper } from 'src/styled/home';

const HomePage: NextPage = () => {
  return (
    <StyledHomeWrapper>
      <ImageBanner />
    </StyledHomeWrapper>
  );
};

export default HomePage;
