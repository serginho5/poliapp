import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import useStorage from '../../utils/useStorage';
import Context from './Context';
import Loading from '../../components/Loading';
import api from '../../services/api';


const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [valuesProvider, setValuesProvider] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  toast.error("Usuario não encontrado");

  useEffect(() => {
    function loadStoragedData() {
      const token = localStorage.getItem('token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }


  function initialState() {
    return { username: '', password: '' };
  }

  async function signIn(values) {
    try {
      const { data: { token } } = await api.post('wp-json/jwt-auth/v1/token', values.values);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setToken(token);
      toast.success('OBA, acesso liberado!');
      history.push('/dashboard');

    } catch (error) {
      toast.error('Houve um erro no login tente novamente.');
    }
    setValuesProvider(initialState);


  }


  return (
    <Context.Provider
      value={{
        valuesProvider,
        loading,
        token,
        setToken,
        setLoading,
        signIn
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;
