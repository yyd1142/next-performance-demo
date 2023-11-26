import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { StyledLogo } from './styled';

const HeaderBar: FC = () => {
  const navigationList = useSelector((state: State) => state.app.navigationList);
  const mallBaseConfig = useSelector((state: State) => state.app.mallBaseConfig);

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledLogo src={`${process.env.NEXT_PUBLIC_CDN_URL}/${mallBaseConfig?.webLogoImage}`} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navigationList.map((item: any) => (
              <Button
                variant="text"
                href={`/${item.urlKey}`}
                key={item.id}
                sx={{ my: 2, color: '#333', display: 'block' }}
              >
                {item.nameLang1}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderBar;
