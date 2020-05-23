import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
`;

export const Content = styled.div`
  background: linear-gradient(to right, #122230 0%, rgb(7, 58, 92) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  h1 {
    color: #fff;
    font-size: 50px;
    margin-bottom: 20px;
}

p {
  color: #fff;
  font-size: 18px;
}
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

export const ContentLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;

img {
    width: 150px;
}
`;

export const ContentForm = styled.div`

button {
    width: 100%;
    height: 47px;
    background: #0a3451;
    color: #fff;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;
    border: 1px solid;
    cursor: pointer;
}
`;

export const ContentUsuario = styled.div`
    width: 300px;
    display: flex;
    border: 1px solid;
    margin-bottom: 10px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;

input {
    width: 98%;
    height: 38px;
    border: transparent;
    padding-left: 10px;
    font-size: 18px;
}
`;

export const ContentSenha = styled.div`
    width: 300px;
    display: flex;
    border: 1px solid;
    margin-bottom: 10px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;

input {
    width: 98%;
    height: 38px;
    border: transparent;
    padding-left: 10px;
    font-size: 18px;
}
`;


