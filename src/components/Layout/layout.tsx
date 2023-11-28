import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { StyledContent } from './styled';
import dynamic from 'next/dynamic';
import HeaderBar from 'src/components/HeaderBar';
import FooterBar from 'src/components/FooterBar';

const AppHeaderBar = dynamic(() => import('src/components/AppHeaderBar'));
const AppFooterBar = dynamic(() => import('src/components/AppFooterBar'));

const Layout: FC<LayoutProps> = ({ children }) => {
  const isMobile = useSelector((state: State) => state.app.isMobile);
  const isShowFooterBar = useSelector((state: State) => state.app.isShowFooterBar);

  return (
    <div>
      {/* 顶部栏 */}
      {isMobile ? <AppHeaderBar /> : <HeaderBar />}
      <StyledContent>{children}</StyledContent>
      {/* 底部栏 */}
      {isShowFooterBar && <>{isMobile ? <AppFooterBar /> : <FooterBar />}</>}
    </div>
  );
};

export default memo(Layout);
