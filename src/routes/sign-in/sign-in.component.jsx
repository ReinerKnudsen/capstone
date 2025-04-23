import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (user) {
      createUserDocumentFromAuth(user);
    }
  };
  return (
    <div>
      <h1>SignIn-Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
