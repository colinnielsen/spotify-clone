import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginCard from './Login/AuthCard';
import Feed from './Feed/Feed';
import { UserContext } from './Firebase/UserAuthContext';

const App = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <Router>
      <Switch>
        {user
          ? (
            <Feed />
          )
          : (
            <Route path="/login">
              <LoginCard />
            </Route>
          )}
      </Switch>
    </Router>
  );
};

export default App;
