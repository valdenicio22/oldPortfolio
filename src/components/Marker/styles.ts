import styled, { css } from 'styled-components'

type Props = {
  size?: 'small'
}

const modifiers = {
  size: () => css`
    width: 3rem;
  `
}

export const Wrapper = styled.div<Props>`
  ${({ theme, size }) => css`
    width: 8rem;
    height: 0.4rem;
    background-color: ${theme.colors.primary};
    border-radius: 0.1rem;
    ${size && modifiers.size()}
  `}
`
