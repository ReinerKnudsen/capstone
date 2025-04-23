import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (user) {
      createUserDocumentFromAuth(user);
    }
  };
  return (
    <div>
      <div>
        <h1>SignIn-Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
