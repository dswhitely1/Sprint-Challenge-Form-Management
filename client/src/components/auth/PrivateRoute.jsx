import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function PrivateRoute({component: Component, ...rest}) {
  const authMethods = useContext(AuthContext);
  if (authMethods.auth) {
    return <Route {...rest} render={props=> <Component {...props} />}/>
  } else {
    return <Redirect to='/' />
  }
}

export default PrivateRoute;