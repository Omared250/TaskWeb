import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./routes/AppRouter";

export default function TodoApp() {

    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AppTheme>
                    <AppRouter />
                </AppTheme>
            </BrowserRouter>
        </Provider>
    );

}
