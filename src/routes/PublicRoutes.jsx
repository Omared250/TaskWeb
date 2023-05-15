import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../todos/pages"
import { LoginPage } from "../auth/pages/LoginPage"
import { RegisterPage } from "../auth/pages/RegisterPage"



export const PublicRoutes = () => {
    return(
        <Routes>
            <Route element={ <HomePage /> } path="/">
                <Route element={ <LoginPage /> } path="/login"/>
                <Route element={ <RegisterPage /> } path="/register"/>
            </Route>
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}
