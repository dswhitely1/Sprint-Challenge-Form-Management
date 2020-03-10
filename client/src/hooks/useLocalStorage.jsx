import { useState } from 'react';

export const useLocalStorage = ( key ) => {
  const [tokenKey, setTokenKey] = useState( `${key}` );

  function testKey() {
    if (localStorage.getItem( tokenKey )) {
      return true;
    }
    return false;
  }

  function getKey() {
    return localStorage.getItem( `${tokenKey}` );
  }

  function setKey( value ) {
    return localStorage.setItem( tokenKey, value );
  }

  function delKey() {
    return localStorage.removeItem( `${tokenKey}` );
  }

  return [testKey, getKey, setKey, delKey];
};