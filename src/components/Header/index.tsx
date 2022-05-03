import Link from 'next/link'
import * as S from './styles'

const Header = () => (
  <S.NavListContainer>
    <S.NavList>
      <S.NavItem>
        <Link href="#work">Work</Link>
      </S.NavItem>
      <S.NavItem>
        <Link href="#aboutMe">About</Link>
      </S.NavItem>
      <S.NavItem>
        <Link href="#connect">Connect</Link>
      </S.NavItem>
    </S.NavList>
  </S.NavListContainer>
)

export default Header
