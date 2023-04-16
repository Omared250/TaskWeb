import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, TodoPage } from "../pages";


export const TodosRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="todos" element={ <TodoPage /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    );
}

