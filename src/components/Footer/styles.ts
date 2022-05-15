import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.mainBg};

    padding: 0 2rem;

    ${media.greaterThan('small')`
      padding: 0 3rem;
    `}
    ${media.greaterThan('large')`
      padding: 0rem 4rem;
    `}
  `}
`

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    width: 100%;
    height: 8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
export const CopyRight = styled.p``

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const SocialMedia = styled.a`
  ${({ theme }) => css`
    transition: filter 0.2s;
    width: 2.8rem;
    height: 2.8rem;
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      width: 3.2rem;
      height: 3.2rem;
    `}

    &:hover {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
    }
  `}
`
