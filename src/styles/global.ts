import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #5933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  // Mudando a fonte para confirações de REM = 1rem = 16px (Mudará de acordo)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px - Focando em "%" por causa de acessibilidade
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px - Focando em "%" por causa de acessibilidade
    }
  }


  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`