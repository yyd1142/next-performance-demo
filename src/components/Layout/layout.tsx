import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { StyledContent } from './styled';
import dynamic from 'next/dynamic';
import { HeaderBar } from 'src/components/HeaderBar';
import { FooterBar } from 'src/components/FooterBar';

const AppHeaderBar = dynamic(() => import('src/components/AppHeaderBar/appHeaderBar'));
const AppFooterBar = dynamic(() => import('src/components/AppFooterBar/appFooterBar'));

const Layout: FC<LayoutProps> = ({ children }) => {
  const isMobile = useSelector((state: State) => state.app.isMobile);

  return (
    <div>
      {/* 顶部栏 */}
      {isMobile ? <AppHeaderBar /> : <HeaderBar />}
      <StyledContent>{children}</StyledContent>
      {/* 底部栏 */}
      {isMobile ? <AppFooterBar /> : <FooterBar />}
    </div>
  );
};

export default memo(Layout);
