import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type SectionProps = {
  changeBg?: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
  `}
`

const sectionModifiers = {
  changeBgColor: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryBg};
  `
}

export const Section = styled.div<SectionProps>`
  ${({ theme, changeBg }) => css`
    width: 100%;
    padding: 7rem 2rem;
    min-height: 70rem;

    ${media.greaterThan('small')`
      padding: 7rem 3rem;
    `}
    ${media.greaterThan('large')`
      padding: 7rem 4rem;
    `}

    ${changeBg && sectionModifiers.changeBgColor(theme)}
  `}
`
