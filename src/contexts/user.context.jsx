import { createContext, useState } from 'react';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; // exports out the state to all subscribing components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
