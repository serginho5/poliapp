import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   from {
     transform: rotate(0deg);
   }to {
     transform: rotate(360deg);
   }
`;

export const Loader = styled.div`
   margin: auto;
   height: 100vh;
   color: #333;
   font-size: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20%;
   min-width: 100% !important;

   svg {
      animation: ${rotate} 1s linear infinite;
   }
`;
