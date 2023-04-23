import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

export const FloattingActionButton = () => {

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
        >
        <AddOutlined sx={{ fontSize: 30 }}/>
    </IconButton>
    )
}
