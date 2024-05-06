import { Navigate, Route, Routes } from "react-router-dom"
import { TodoPage } from "../todos/pages"
import { TaskView } from "../todos/views/TaskView"


export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route path="/calendar" element={<TodoPage view="calendar" />} />
            <Route path="/tasks" element={<TodoPage view="tasks" />} />
            <Route path="/completedtasks" element={<TodoPage view="completedtasks" />} />
            <Route path="/*" element={ <Navigate to="/calendar" /> } />
        </Routes>
    )
}
