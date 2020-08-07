import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from './Firebase';

export const UserContext = createContext({ user: null });

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => setUser(userAuth));
  }, []);

  const { children } = props;

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
