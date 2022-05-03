import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; //10px - 1rem
    }
    body {
      -webkit-font-smoothing: antialiased;
    }
    body,
    input,
    textarea,
    button {
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.normal};
      color: ${theme.colors.white};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.weight.bold};
    }
  `}
`
export default GlobalStyles
