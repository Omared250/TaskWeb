import { Create, LoginOutlined } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

export const HomePage = () => {

    return (
        <Grid container
            sx={{ minHeight: '100vh', backgroundImage: `url(${"/src/assets/back.jpg"})`, backgroundSize: 'cover' }}
        >
            <Grid container
                spacing={ 0 }
                direction='column'
                justifyContent='center'
                alignContent='center'
                sx={{ backgroundColor: 'rgba(35, 8, 8, 0.4)' }}
            >
                <Grid container
                    className="box-shadow"
                    sx={{ width: { sm: 500 }, backgroundColor:'rgba(255,255,255,0.7)', padding: 3, borderRadius: 2, mb: 2, mt: 1 }}
                >
                    <Grid container
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                    >
                        <Grid item>
                            <Typography variant='h2' sx={{ fontWeight: '700' }}>Something you don't want to forget?</Typography>
                        </Grid>
                        <Grid item
                            sx={{ mt: 1 }}
                        >
                            <Typography variant='p'>
                            In To Do Web we help you to save all those tasks that you are assigned and do not want to forget, 
                            likewise the management of team tasks becomes easier when you have us by your side, 
                            as we help to organize all those pending tasks as well as who is responsible for fulfilling them. 🤯
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={ 2 }
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={ 12 } sm={ 6 } >
                            <Button variant="contained" fullWidth startIcon={ <LoginOutlined /> } >
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth startIcon={ <Create /> } >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

