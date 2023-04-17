import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, TodoPage } from "../pages";


export const TodosRoutes = () => {
    
    const authState = 'no-authenticated';

    return (
        <Routes>
            {
                (authState === 'no-authenticated')
                ? <Route path="/" element={ <HomePage /> } />
                : <Route path="/todos" element={ <TodoPage /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    );
}

