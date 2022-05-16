import Link from 'next/link'
import * as S from './styles'

export type BtnLinkProps = {
  section: '#work' | '#welcome' | '#aboutMe' | '#connect'
  children: string
}

const BtnLink = ({ section, children }: BtnLinkProps) => (
  <Link href={section} passHref>
    <S.Wrapper>{children}</S.Wrapper>
  </Link>
)

export default BtnLink
