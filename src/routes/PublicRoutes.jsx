import { Navigate, Route, Routes } from "react-router-dom"
// import { SignIn } from "../components/SignIn"
// import { SignUp } from "../components/SignUp"
import { HomePage } from "../todos/pages"



export const PublicRoutes = () => {
    return(
        <Routes>
            <Route element={ <HomePage /> } path="/">
                {/* <Route element={ <SignIn /> } path="/login"/>
                <Route element={ <SignUp /> } path="/register"/> */}
            </Route>
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}
