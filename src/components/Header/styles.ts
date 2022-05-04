import styled from 'styled-components'

export const NavListContainer = styled.header`
  width: 100%;
  height: 12.8rem;

  padding: 4.6rem 0;
`

export const NavListContent = styled.div`
  width: ${({ theme }) => theme.containers.regularDesktop};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
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
