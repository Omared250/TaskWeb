import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { TodosRoutes } from "../todos/routes/TodosRoutes";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={ <AuthRoutes /> } />

            <Route path="/*" element={ <TodosRoutes /> } />
        </Routes>
    );
}

