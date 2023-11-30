import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { StyledContent } from './styled';
import HeaderBar from 'src/components/HeaderBar';
import FooterBar from 'src/components/FooterBar';
import AppHeaderBar from 'src/components/AppHeaderBar';
import AppFooterBar from 'src/components/AppFooterBar';

const Layout: FC<LayoutProps> = ({ children }) => {
  const isMobile = useSelector((state: State) => state.app.isMobile);
  const isShowFooterBar = useSelector((state: State) => state.app.isShowFooterBar);

  return (
    <div>
      {/* 顶部栏 */}
      {isMobile ? <AppHeaderBar /> : <HeaderBar />}
      <StyledContent>{children}</StyledContent>
      {/* 底部栏 */}
      {<>{isMobile ? <AppFooterBar /> : <FooterBar />}</>}
    </div>
  );
};

export default memo(Layout);
