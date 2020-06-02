import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #EF740E;
    padding: 0 20px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
img {
    width: 50px;
}
`;

export const ContentMenu = styled.div`

@media screen and (min-width: 767px){
  display: none;
}
`;

export const Content = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
`;

export const ContentLogo = styled.div`
    width: 120px;
`;

export const ContentText = styled.div`

p {
    font-size: 23px;
    color: #fff;
}
`;

export const ContentAvatar = styled.div`

`;
