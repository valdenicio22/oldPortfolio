import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 18rem;
    padding: 1.6rem 1.5rem;
    border-radius: 0.6rem;

    text-align: center;
    background-color: ${theme.colors.primary};

    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }

    a {
      text-decoration: none;
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.large};
    }
  `}
`
