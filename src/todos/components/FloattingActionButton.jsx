import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from "date-fns";

export const FloattingActionButton = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Omar'
            }
        });
        openDateModal();
    };

    return (
        <IconButton
            size='large'
            sx={{
                color: 'white',
                backgroundColor: 'primary.main',
                ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
                position: 'fixed',
                right: 50,
                bottom: 50,
            }}
            onClick={ handleClickNew }
        >
        <AddOutlined sx={{ fontSize: 30 }}/>
    </IconButton>
    )
}
