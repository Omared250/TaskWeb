import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayaout } from '../layout/AuthLayaout';


export const RegisterPage = () => {

    return (
        <AuthLayaout title='Sign Up'>
            <form>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Name" 
                            type="text" 
                            placeholder="Your name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="example@email.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid container
                        spacing={ 2 }
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent="end"
                    >
                        <Typography sx={{ mr: 1  }}>Already have a TodoWeb account?</Typography>
                        <Link component={ RouterLink } to="/auth/login">
                            Sign In
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayaout>
    );
}




