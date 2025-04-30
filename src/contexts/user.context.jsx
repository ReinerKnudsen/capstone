import { createContext, useEffect, useReducer } from 'react';
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from '../utils/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // initialize the reducer
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  console.log('In Reducer', currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // Wir initialisieren den Auth State Listener, der anschließend aktiv ist
    const unsubscribe = onAuthStateChangeListener((user) => {
      user && createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
