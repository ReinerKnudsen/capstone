import { useState } from 'react';
import { signInWithGooglePopup, signInWithCredentials } from '../../utils/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInFormContainer, SignInButtonContainer, Title } from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleGoogleSignIn = async () => {
    await signInWithGooglePopup();
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
      response && setFormFields(defaultFormFields);
    } catch (error) {
      console.log('Error signing in', error);
    }
  };

  return (
    <SignInFormContainer>
      <Title>Already have an account?</Title>
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
        <SignInButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
        </SignInButtonContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
