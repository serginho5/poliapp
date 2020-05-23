import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import Logo from '../../assets/icone_app.svg';
import api from '../../services/api';
import { MdExitToApp, MdLock, MdFace } from 'react-icons/md'
import { Container, Content, ContentLogin, ContentBox, ContentForm, ContentUsuario, ContentSenha } from './styles';

function initialState() {
  return { username: '', password: '' };
}


const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const response = await api.post('wp-json/jwt-auth/v1/token', values)

    const { token } = response.data;

    if (token) {
      setToken(token);
      history.push('/dashboard');
    }

    setValues(initialState);
  }

  function onchange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <Container>
      <Content>
        <ContentBox>
          <h1>Bem vindo ao seu App!</h1>
          <p>Faço o Login ao lado e começe a gerenciar seu site,</p>
          <p>preparamos um canal exclusivo e intuitivo</p>
          <p> para facilitar o seu dia a dia...</p>
        </ContentBox>
      </Content>
      <ContentLogin>
        <img src={Logo} alt="logo" />
        <ContentForm>
          <form onSubmit={handleRegister}>
            <ContentUsuario>
              <input
                type="text"
                name="username"
                id="user"
                placeholder="Usuário"
                onChange={onchange}
                value={values.user}
              />
              <MdFace size={22} color="#aaa7a8" />
            </ContentUsuario>
            <ContentSenha>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                onChange={onchange}
                value={values.password}
              />
              <MdLock size={22} color="#aaa7a8" />
            </ContentSenha>
            <button type="submit">
              Entrar
              <MdExitToApp size={22} left={10} />
            </button>
          </form>
        </ContentForm>
      </ContentLogin>

    </Container >
  )
}
export default Login;
