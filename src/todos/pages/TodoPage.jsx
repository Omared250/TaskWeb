import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { TodoLayout } from "../layout/TodoLayout";
import { NothingSelectedView, TaskView } from "../views";


export const TodoPage = () => {
    return (
        <TodoLayout>
            <NothingSelectedView />
            {/* <TaskView /> */}

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'secondary.main',
                    ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </TodoLayout>
    );
}
