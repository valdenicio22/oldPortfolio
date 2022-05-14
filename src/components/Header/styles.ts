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
  `}
`

export const NavListContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    width: 100%;
    height: 8rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Logo = styled.a`
  ${({ theme }) => css`
    cursor: pointer;

    text-decoration: none;
    color: ${theme.colors.white};

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
    span {
      color: ${theme.colors.primary};
    }
  `}
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;

  display: flex;
  align-items: center;
  gap: 2rem;
`
export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`
