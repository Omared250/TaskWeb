import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, TodoPage } from "../todos/pages";
import { LoginPage } from "../auth/pages";
import { useEffect } from "react";
import { useAuthStore } from "../hooks";
import { AuthRouter } from "../auth/routes/AuthRouter";


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])
    


    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }


    return(
        <Routes>
            {
                ( status === 'no-authenticated' )
                ? <Route path="/auth/*" element={ <AuthRouter /> } />
                : <Route path="/*" element={ <TodoPage /> } />
            }
            {/* <Route path="/*" element={ <Navigate to="/auth/login" /> } /> */}
        </Routes>
    )

};