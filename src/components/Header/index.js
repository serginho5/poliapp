import React from 'react';
import MenuLeft from '../../components/MenuLeft';
import MenuAvatar from '../../components/MenuAvatar';
import Logo from '../../assets/icone_app.svg';
import { Container, ContentLogo, ContentText, ContentAvatar, Content, ContentMenu } from './styles';

const Header = () => {
  return (
    <Container>
      <ContentMenu>
        <MenuLeft />
      </ContentMenu>
      <ContentLogo>
        <img src={Logo} alt="logo" />
      </ContentLogo>
      <Content>
        <ContentText>
          <p>Painel de Controle</p>
        </ContentText>
        <ContentAvatar>
          <MenuAvatar />
        </ContentAvatar>
      </Content>
    </Container>
  )
}

export default Header;
