import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';
import useStorage from '../../utils/useStorage';
import api from '../../services/api';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [valuesProvider, setValuesProvider] = useState(initialState);
  const history = useHistory();

  function initialState() {
    return { username: '', password: '' };
  }

  async function signIn(values) {
    console.log(values)
    const response = await api.post('wp-json/jwt-auth/v1/token', values.values)
    console.log(response.data);

    const { token } = response.data;

    if (token) {
      setToken(token);
      history.push('/dashboard');
    }

    setValuesProvider(initialState);

  }

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        valuesProvider,
        signIn
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;
