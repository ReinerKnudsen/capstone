import './sign-in-form.styles.scss';
import { useState, useContext } from 'react';
import {
  signInWithGooglePopup,
  signInWithCredentials,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    if (user) {
      createUserDocumentFromAuth(user);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      const response = await signInWithCredentials(email, password);
      if (response) {
        const user = response.user;
        setCurrentUser(user);
        setFormFields(defaultFormFields);
      }
    } catch (error) {
      console.log('Error signing in', error);
    }
  };

  return (
    <div className='sign-in-form'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          required
        />
        <div className='sign-in-button-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
