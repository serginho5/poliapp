import React from 'react';
import Header from '../../components/Header';
import Siderbar from '../../components/Siderbar';
import { Container, Content } from './styles';

const All = () => (
  <>
    <Header />
    <Container>
      <Siderbar />
      <Content>
        <h1>Aqui entra todos os arquivos</h1>
      </Content>
    </Container>
  </>
)

export default All;
