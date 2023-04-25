import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { TodosRoutes } from "../todos/routes/TodosRoutes";
import { getEnvVariables } from "../helpers";


export const AppRouter = () => {

    console.log(getEnvVariables());

    return (
        <Routes>
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="/*" element={ <TodosRoutes /> } />
        </Routes>
    );
}

