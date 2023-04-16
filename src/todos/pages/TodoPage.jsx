import { TodoLayout } from "../layout/TodoLayout";
import { TaskView } from "../views";


export const TodoPage = () => {
    return (
        <TodoLayout>
            {/* <NothingSelectedView /> */}
            <TaskView />
        </TodoLayout>
    );
}
