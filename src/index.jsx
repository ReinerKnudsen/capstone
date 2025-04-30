import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box; 
  }
body {
  margin-left: 20px;
  margin-right: 20px;
  
  font-family: 'Sofia Sans Condensed', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}
`;

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 40px;
  position: relative;
`;
