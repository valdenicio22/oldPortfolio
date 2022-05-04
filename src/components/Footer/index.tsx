import * as S from './styles'
import { Github, Linkedin } from '@styled-icons/bootstrap'

import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <S.FooterContainer>
      <S.CopyRight>© CopyRight 2022</S.CopyRight>
      <S.LinksContainer>
        <Link href="https://github.com/valdenicio22" passHref>
          <S.SocialMedia target={'_blank'}>
            <Github width={30} height={30} color={'white'} />
          </S.SocialMedia>
        </Link>

        <Link href="https://www.linkedin.com/in/valdenicioferreira/" passHref>
          <S.SocialMedia target={'_blank'}>
            <Linkedin width={30} height={30} color={'white'} />
          </S.SocialMedia>
        </Link>
      </S.LinksContainer>
    </S.FooterContainer>
  </S.Wrapper>
)

export default Footer
