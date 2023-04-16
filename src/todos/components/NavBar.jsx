import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";


export const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar position="fixed"
            sx={{ 
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` }
             }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
