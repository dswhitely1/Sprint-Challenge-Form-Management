import React, { useContext } from 'react';
import AuthContext, { AuthProvider } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
// Components
import Registration from './forms/Registration';

function App() {
  const [auth, login, logout, token] = useAuth();
  return (
    <AuthProvider value={{
      auth,
      login,
      logout,
      token
    }}>
      <Registration login={login}/>
    </AuthProvider>
  );
}

export default App;