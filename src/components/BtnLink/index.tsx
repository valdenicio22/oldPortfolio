import Link from 'next/link'
import * as S from './styles'

export type BtnLinkProps = {
  section: '#work' | '#welcome' | '#aboutMe' | '#connect'
  children: string
}

const BtnLink = ({ section, children }: BtnLinkProps) => (
  <S.Wrapper>
    <Link href={section}>{children}</Link>
  </S.Wrapper>
)

export default BtnLink
