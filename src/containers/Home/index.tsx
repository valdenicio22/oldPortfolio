import Header from 'components/Header'
import { Github, Linkedin } from '@styled-icons/bootstrap'
import * as S from './styles'
import Link from 'next/link'
import Welcome from 'components/Welcome'
import AboutMe from 'components/AboutMe'

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Welcome id="welcome" />
      <S.WorkSection id="work">
        <h1>Work Section</h1>
      </S.WorkSection>
      <AboutMe id="aboutMe" />
      <S.ConnectSection id="connect">
        <h1>Connect Section</h1>
      </S.ConnectSection>
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
}

export default Home
