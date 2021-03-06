import React from 'react';
import Header from '../../components/Header';
import Siderbar from '../../components/Siderbar';
import { Container, Content } from './styles';

const Dashboard = () => (
  <>
    <Header />
    <Container>
      <Siderbar />
      <Content>
        <h1>Aqui entra o conteudo do dashboard</h1>
      </Content>
    </Container>
  </>
)

export default Dashboard
