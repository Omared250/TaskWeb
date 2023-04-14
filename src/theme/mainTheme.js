import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#6096B4'
        },
        secondary: {
            main: '#BDCDD6'
        },
        error: {
            main: red.A400
        }
    }
});