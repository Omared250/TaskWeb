import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";


export const TaskView = () => {
    return (
        <Grid container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>
                    28 de agosto 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Enter title'
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='What do you want to Task?'
                    label='Task'
                    minRows={ 5 }
                    sx={{ border: 'none', mb: 1 }}
                />
            </Grid>
        </Grid>
    );
}
