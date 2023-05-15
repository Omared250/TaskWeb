import { CalendarMonthOutlined, TurnedInNot } from "@mui/icons-material";
import List from '@mui/material/List';
import { Box, Divider, Drawer, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useAuthStore } from "../../hooks";


export const SideBar = ({ drawerWidth }) => {

    const { user } = useAuthStore();

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, fontSize: 'large' }}
        >
            <Drawer
                variant='permanent' // temporary if i want to show it due to the screen size
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
                }}
            >
                <Toolbar>
                    <CalendarMonthOutlined sx={{ mr: 1 }}/>
                    <Typography variant='h6' noWrap component='div'>
                        { user.name }
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['January', 'February', 'March', 'April'].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Duis et qui cillum sint laborum aute.' } />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
}
