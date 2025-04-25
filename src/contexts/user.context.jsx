import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangeListener, createUserDocumentFromAuth } from '../utils/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // exports out the state to all subscribing components

  useEffect(() => {
    // Wir initialisieren den Auth State Listener, der anschließend aktiv ist
    const unsubscribe = onAuthStateChangeListener((user) => {
      console.log('Auth state changed', user);
      user && createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
