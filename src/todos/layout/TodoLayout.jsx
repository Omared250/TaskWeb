import { Box } from "@mui/material";

const drawerWidth = 240;

export const TodoLayout = ({ children }) => {
    return(
        <Box sx={{ display: 'flex' }}>

            {/* Navbar */}

            {/* Sidebar */}

            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* ToolBar */}

                { children }

            </Box>
        </Box>
    );
}
