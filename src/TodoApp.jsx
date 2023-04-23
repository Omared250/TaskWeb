import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import { Provider } from "react-redux";
import { store } from "./store";

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
