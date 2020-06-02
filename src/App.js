import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes />
  </BrowserRouter>
)

export default App;

