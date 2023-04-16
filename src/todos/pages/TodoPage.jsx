import { Typography } from "@mui/material";
import { TodoLayout } from "../layout/TodoLayout";
import { NothinSelectedView } from "../views/NothinSelectedView";


export const TodoPage = () => {
    return (
        <TodoLayout>
            {/* <Typography>Duis quis veniam ipsum sint elit velit sit.</Typography> */}
            <NothinSelectedView />
            {/* NoteView */}
        </TodoLayout>
    );
}
