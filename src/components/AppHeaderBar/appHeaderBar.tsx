import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FC, useState } from 'react';
import { AppMenuDrawer } from '../AppMenuDrawer';

const AppHeaderBar: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClickMenu = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {openDrawer && <AppMenuDrawer onClose={() => setOpenDrawer(false)} />}
    </>
  );
};

export default AppHeaderBar;
