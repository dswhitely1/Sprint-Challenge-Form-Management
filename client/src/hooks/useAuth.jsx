import {
  useEffect,
  useState
} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const [testLocalStorage, getLocalStorage, setLocalStorage, removeLocalStorage] = useLocalStorage( 'login_token' );
  const [auth, setAuth]                                                          = useState( false );

  useEffect( () => {
    if (testLocalStorage()) {
      setAuth( true );
    }
  }, [] );

  function newLogin( value ) {
    console.log(value);
    setLocalStorage( value );
    setAuth( true );
  }

  function newLogout() {
    removeLocalStorage();
    setAuth( false );
  }

  function getToken() {
    return getLocalStorage();
  }

  return [auth, newLogin, newLogout, getToken];
};