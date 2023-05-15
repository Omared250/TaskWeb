import { Navigate, Route, Routes } from "react-router-dom"
import { TodoPage } from "../todos/pages"


export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route element={ <TodoPage /> } path="/todo" />
            <Route path="/*" element={ <Navigate to="/todo" /> } />
        </Routes>
    )
}
