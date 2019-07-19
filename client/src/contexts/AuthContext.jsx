import {createContext} from 'react';

const AuthContext = createContext(false);

export const AuthProvider = AuthContext.Provider;

export default AuthContext;