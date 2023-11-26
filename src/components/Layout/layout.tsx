import { FC } from 'react';
import { useSelector } from 'react-redux';
import { HeaderBar, AppHeaderBar } from 'src/components';

const Layout: FC<LayoutProps> = ({ children }) => {
  const isMobile = useSelector((state: State) => state.app.isMobile);

  return (
    <div>
      {isMobile ? <AppHeaderBar /> : <HeaderBar />}
      {children}
    </div>
  );
};

export default Layout;
