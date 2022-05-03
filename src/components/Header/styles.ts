import styled from 'styled-components'

export const NavListContainer = styled.div`
  width: 112rem;
  margin: 0 auto;
  height: 8rem;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: flex-end;

  display: fixed;
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
    color: white;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`
