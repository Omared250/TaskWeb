import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export default function TodoApp() {

    return (
        <>
            <BrowserRouter>
                <AppTheme>
                    <AppRouter />
                </AppTheme>
            </BrowserRouter>
        </>
    );

}
