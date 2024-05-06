import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { AddCircle, Assignment, CalendarMonthOutlined, HouseOutlined, TaskAltOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const TemporaryDrawer = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // User name
  const { user } = useAuthStore();

  // Function to update the selected menu item and save to localStorage
  const handleListItemClick = (menuValue) => {
    const newMenuValue = menuValue.toLowerCase().replace(/\s+/g, '');
    navigate('/' + newMenuValue);
  }

  // Menu Items to convert using the map function
  const menuItems = [
    {text: 'Calendar', icon: <CalendarMonthOutlined />},
    {text: 'Tasks', icon: <Assignment/>},
    {text: 'Completed Tasks', icon: <TaskAltOutlined />},
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(item.text)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Projects', 'Add new project'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HouseOutlined /> : <AddCircle/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{ color: 'white', fontSize: 'small' }}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ fontSize: 'large' }}>
        <div className='profile'>
          <Avatar src="/broken-image.jpg" />
          <span>{user.name}</span>
        </div>
        <Divider />
        {DrawerList}
      </Drawer>
    </div>
  );
}