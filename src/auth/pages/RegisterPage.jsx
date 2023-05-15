import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { ModalLayout } from '../layout/ModalLayout';

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
};

export const RegisterPage = () => {

    const { starRegister, errorMessage } = useAuthStore();

    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange } = useForm( registerFormFields );

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2 ) {
            Swal.fire('Error at regsiter level', 'Passwords do not match', 'error')
            return;
        }
        starRegister({ email: registerEmail, name: registerName, password: registerPassword });
    };

    useEffect(() => {
        if ( errorMessage !== undefined ) {
          Swal.fire('error in the authentication', errorMessage, 'error');
        }
    }, [ errorMessage ])

    return (
        <ModalLayout title='Sign Up'>
            <form onSubmit={ registerSubmit } class="modal__form" id="SignUp">
                <label>Name</label>
                <input
                  label="Name" 
                  type="text" 
                  placeholder="Your name"
                  name='registerName'
                  value={ registerName }
                  onChange={ onInputChange }
                />
                <label>Email Address</label>
                <input
                  label="Email" 
                  type="email" 
                  placeholder="example@email.com"
                  name='registerEmail'
                  value={ registerEmail }
                  onChange={ onInputChange }
                />
                <label>Password</label>
                <input
                  label="Password" 
                  type="password" 
                  placeholder="Password"
                  name='registerPassword'
                  value={ registerPassword }
                  onChange={ onInputChange }
                />
                <label>Repeat Password</label>
                <input
                  label="Repeat Password" 
                  type="password" 
                  placeholder="Repeat Password"
                  name='registerPassword2'
                  value={ registerPassword2 }
                  onChange={ onInputChange }
                />
                <button class="btn">Sign Up&rarr;</button>
            </form>
        </ModalLayout>
    );
}



