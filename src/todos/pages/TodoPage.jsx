import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { TodoLayout } from "../layout/TodoLayout";
import { NothingSelectedView, TaskView } from "../views";
import { CalendarView } from "../views/CalendarView";


export const TodoPage = () => {
    return (
        <TodoLayout>
            {/* <NothingSelectedView /> */}
            {/* <TaskView /> */}
            <CalendarView />
        </TodoLayout>
    );
}
