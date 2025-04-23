import { useState } from "react";
import "./sign-up-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName: displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayname">DisplayName</label>
        <input
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">E-Mail</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
