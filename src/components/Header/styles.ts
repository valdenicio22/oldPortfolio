import styled from 'styled-components'

export const NavListContainer = styled.header`
  width: 100%;
  max-height: 15rem;
  height: 100%;
`

export const NavListContent = styled.div`
  width: 112rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  right: 2rem;

  height: 8rem;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li:last-child {
    margin-right: 2rem;
  }
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
