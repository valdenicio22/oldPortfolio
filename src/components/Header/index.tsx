import Link from 'next/link'
import * as S from './styles'

export type HeaderProps = {
  id: string
}

const Header = ({ id }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.NavListContainer id={id}>
        <Link href="#welcome" passHref>
          <S.Logo>
            CO <span>&#123; &#41;</span> E
          </S.Logo>
        </Link>
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
    </S.Wrapper>
  )
}

export default Header
