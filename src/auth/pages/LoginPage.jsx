import { Link as RouterLink } from 'react-router-dom';
import { Login } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayaout } from '../layout/AuthLayaout';


export const LoginPage = () => {

    return (
        <AuthLayaout title='Login'>
            <form>
                <Grid container>
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
                            <Link component={ RouterLink } to='/todos'>
                                <Button variant="contained" fullWidth>
                                    Login
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent="end"
                    >
                        <Link component={ RouterLink } to="/auth/register">
                            Create account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayaout>
    );
}

