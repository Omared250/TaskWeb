import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, TodoPage } from "../pages";
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";


export const TodosRoutes = () => {
    
    // const authState = 'no-authenticated';

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
      checkAuthToken();
    }, [])
    

    if ( status === ' checking' ) {
        return (
            <h3>Loading.....</h3>
        )
    }

    return (
        <Routes>
            {
                ( status === 'no-authenticated')
                ? <Route path="/" element={ <HomePage /> } />
                : <Route path="/todos" element={ <TodoPage /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    );
}

