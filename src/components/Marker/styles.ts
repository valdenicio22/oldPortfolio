import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type Props = {
  size?: 'small'
}

const modifiers = {
  size: () => css`
    width: 3rem;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;

    font-weight: ${theme.font.weight.bold};

    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Marker = styled.div<Props>`
  ${({ theme, size }) => css`
    width: 8rem;
    height: 0.4rem;
    background-color: ${theme.colors.primary};
    border-radius: 0.1rem;
    ${size && modifiers.size()};
  `}
`
