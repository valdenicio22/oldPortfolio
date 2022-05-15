import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type Props = {
  size?: 'small'
}

const modifiers = {
  size: () => css`
    width: 3rem;
  `,
  fontSize: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `
}

export const Wrapper = styled.div<Props>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;

    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xlarge};
    `}
    ${size && modifiers.fontSize(theme)};
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
