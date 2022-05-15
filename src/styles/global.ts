import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'

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
      scroll-behavior: smooth;
    }
    body {
      -webkit-font-smoothing: antialiased;
    }
    body,
    input,
    textarea,
    button {
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.normal};
      color: ${theme.colors.white};

      ${media.greaterThan('small')`
        font-size: ${theme.font.sizes.medium};
      `}
      ${media.greaterThan('large')`
        font-size: ${theme.font.sizes.large};
      `}
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
