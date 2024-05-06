import { LogoutOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import { useAuthStore } from "../../hooks";
import { TemporaryDrawer } from "./TemporaryDrawer";

export const NavBar = ({ drawerWidth = 240 }) => {
  const { startLogout } = useAuthStore();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#6096B4",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ml: { sm: `${drawerWidth}px` },
        fontSize: 'large'
      }}
    >
      <Toolbar sx={{ width: "98%", maxWidth: "1440px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TemporaryDrawer />
          <IconButton color="inherit" onClick={startLogout} >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
