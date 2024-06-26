import { TodoLayout } from "../layout/TodoLayout";
import { CalendarView } from "../views/CalendarView";
import { CompletedTaskView } from "../views/CompletedTaskView";
import { TaskView } from "../views/TaskView";


export const TodoPage = ({ view }) => {
    return (
        <TodoLayout>
            {view === "calendar" && <CalendarView />}
            {view === "tasks" && <TaskView />}
            {view === "completedtasks" && <CompletedTaskView />}
        </TodoLayout>
    );
}
