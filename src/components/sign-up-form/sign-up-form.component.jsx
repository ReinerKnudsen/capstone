import { useState, useContext } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert('Password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName: displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log('user creation encountered an error', error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='DisplayName'
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
