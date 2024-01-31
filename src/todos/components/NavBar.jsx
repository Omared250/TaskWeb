import { CalendarMonthOutlined, LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useAuthStore } from "../../hooks";


export const NavBar = ({ drawerWidth = 240 }) => {

    const { startLogout } = useAuthStore();

    return (
        <AppBar position="fixed"
            sx={{ 
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` },
                fontSize: 'large'
             }}
        >
            <Toolbar>
                <Grid container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant='h6' noWrap component='div' sx={{fontSize: '20px' }}>
                        <CalendarMonthOutlined  sx={{ m: '0.2em', fontSize: '2em' }}/>
                        Calendar Tasks
                    </Typography>

                    <IconButton color='inherit' onClick={ startLogout } >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    );
}
