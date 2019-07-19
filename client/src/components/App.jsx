import React, { useContext } from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthContext, { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import PrivateRoute from './auth/PrivateRoute';
// Components
import Registration from './forms/Registration';
import Recipes from './recipes/Recipes';

function App() {
  const [auth, login, logout, token] = useAuth();
  return (
    <AuthProvider value={{
      auth,
      login,
      logout,
      token
    }}>
      <Switch>
        <PrivateRoute path='/recipes' component={Recipes} />
        <Route path='/register' render={props => <Registration {...props} login={login} url={`/register`} />}/>
        <Route path='/' render={props => <Registration {...props} login={login} url={`/login`} />}/>
      </Switch>
    </AuthProvider>
  );
}

export default App;