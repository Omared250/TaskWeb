import { Box } from "@mui/material";
import { NavBar } from "../components/NavBar";

const drawerWidth = 240;

export const TodoLayout = ({ children }) => {
    return(
        <Box sx={{ display: 'flex' }}>

            <NavBar />

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
