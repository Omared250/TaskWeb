import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../hooks";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const status = 'authenticated'; // 'authenticated'; // 'not-authenticated';

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
              ( status === 'authenticated' )
              ? <Route path="/*" element={ <PrivateRoutes /> } />
              : <Route path="/*" element={ <PublicRoutes /> } />
            }
        </Routes>
    )

};