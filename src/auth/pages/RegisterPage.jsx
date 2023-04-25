import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayaout } from '../layout/AuthLayaout';
import { useForm } from '../../hooks';

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
};

export const RegisterPage = () => {

    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange } = useForm( registerFormFields );

    const registerSubmit = ( event ) => {
        event.preventDefault();
        console.log({ registerEmail, registerName, registerPassword, registerPassword2 });
    };

    return (
        <AuthLayaout title='Sign Up'>
            <form onSubmit={ registerSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Name" 
                            type="text" 
                            placeholder="Your name"
                            name='registerName'
                            value={ registerName }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            placeholder="example@email.com"
                            name='registerEmail'
                            value={ registerEmail }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password"
                            name='registerPassword'
                            value={ registerPassword }
                            onChange={ onInputChange }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Repeat Password" 
                            type="password" 
                            placeholder="Repeat Password"
                            name='registerPassword2'
                            value={ registerPassword2 }
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
                                Create Account
                            </button>
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




