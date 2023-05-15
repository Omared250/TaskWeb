import { useAuthStore, useForm } from '../../hooks';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { ModalLayout } from '../layout/ModalLayout';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
};

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    };

    useEffect(() => {
      if ( errorMessage !== undefined ) {
        Swal.fire('error in the authentication', errorMessage, 'error');
      }
    }, [ errorMessage ])
    

    return (
        <ModalLayout title='Login'>
            <form onSubmit={ loginSubmit } className='modal__form'>
                <label>Email Address</label>
                <input   
                  label="Email" 
                  type="email" 
                  placeholder="example@email.com"
                  name='loginEmail'
                  value={ loginEmail }
                  onChange={ onInputChange } />
                <label>Password</label>
                <input 
                  label="Password" 
                  type="password" 
                  placeholder="Password"
                  name='loginPassword'
                  value={ loginPassword }
                  onChange={ onInputChange }
                />
                <button className="btn">Next step &rarr;</button>
            </form>
        </ModalLayout>
    );
}

