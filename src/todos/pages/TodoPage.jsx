import { TodoLayout } from "../layout/TodoLayout";
import { CalendarView } from "../views/CalendarView";


export const TodoPage = () => {
    return (
        <TodoLayout>
            <CalendarView />
        </TodoLayout>
    );
}
