import { DeleteOutline } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useCalendarStore } from "../../hooks"

export const FloattingActionDeleteButton = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent()
    };

    return (
        <IconButton
            size='large'
            sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                position: 'fixed',
                bottom: 50,
                display: hasEventSelected ? '' : 'none',
            }}
            onClick={ handleDelete }
        >
        <DeleteOutline sx={{ fontSize: 30 }}/>
    </IconButton>
    )
}