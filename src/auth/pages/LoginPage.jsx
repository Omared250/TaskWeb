import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from "@mui/material";
import { AuthLayaout } from '../layout/AuthLayaout';
import { useAuthStore, useForm } from '../../hooks';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
};

export const LoginPage = () => {

    const { startLogin } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    };

    return (
        <AuthLayaout title='Login'>
            <form onSubmit={ loginSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="example@email.com"
                            name='loginEmail'
                            value={ loginEmail }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            name='loginPassword'
                            value={ loginPassword }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid container
                        spacing={ 2 }
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={ 12 }>
                            <button
                                style={ { 
                                    width: '100%', 
                                    backgroundColor: '#6096B4', 
                                    borderRadius: '10px',
                                    padding: '1.5%',
                                    border: 'none', 
                                } }
                            >
                                Login
                            </button>
                            {/* <Link component={ RouterLink } to='/todos'> */}
                                {/* <Button onClick={ loginSubmit } variant="contained" fullWidth>
                                    Login
                                </Button> */}
                            {/* </Link> */}
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

