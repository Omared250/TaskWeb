import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export default function TodoApp() {

    return (
        <>
            <AppTheme>
                <AppRouter />
            </AppTheme>
        </>
    );

}
