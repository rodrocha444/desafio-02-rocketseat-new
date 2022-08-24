import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    border:0;
  }
  
  html{
    font-size: 1rem;
  }

  button:hover{
    cursor: pointer;
  }
`