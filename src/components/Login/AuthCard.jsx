import React, { useContext } from 'react';
import { styled } from 'baseui';
import { Card } from 'baseui/card';
import { Button } from 'baseui/button';
import { UserContext } from '../Firebase/UserAuthContext';
import { signInWithGoogle, logout } from '../Firebase/Firebase';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
});

const LoginCard = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <Centered>
      <Card>
        <Button
          onClick={() => signInWithGoogle()}
        >
          Login with Google
        </Button>
        <Button
          onClick={() => logout()}
        >
          log out
        </Button>
      </Card>
    </Centered>
  );
};

export default LoginCard;
