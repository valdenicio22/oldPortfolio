import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    max-width: 18rem;
    width: 100%;
    padding: 1.3rem 1.5rem;
    border-radius: 0.4rem;

    text-align: center;
    background-color: ${theme.colors.primary};

    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }

    text-decoration: none;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};
  `}
`
