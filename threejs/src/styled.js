import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: #f1f4f8;
    position: fixed;
  }
`

export const Layout = styled.div`
    width: 100%;
    height: 100vh;
`