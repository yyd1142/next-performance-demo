import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface AppMenuDrawerProps {
  onClose: () => void;
}

const AppMenuDrawer: FC<AppMenuDrawerProps> = ({ onClose }) => {
  const [open, setOpen] = useState(false);
  const navigationList = useSelector((state: State) => state.app.navigationList);

  const handleOpenDrawer = () => {};

  const handleCloseDrawer = () => {
    onClose();
  };

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <SwipeableDrawer
      anchor={'left'}
      open={open}
      onClose={handleCloseDrawer}
      onOpen={handleOpenDrawer}
    >
      <Box sx={{ width: '80vw' }} role="presentation">
        <List>
          {navigationList.map((item) => (
            <ListItem key={item?.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={item?.nameLang1} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default AppMenuDrawer;
