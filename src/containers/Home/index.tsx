import Header from '../../components/Header'
import Welcome from '../../components/Welcome'
import AboutMe from '../../components/AboutMe'
import Connect from '../../components/Connect'
import Footer from '../../components/Footer'
import Work from '../../components/Work'
import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WelcomeSection id="welcome">
        <Welcome />
      </S.WelcomeSection>
      <S.WorkSection id="work">
        <Work />
      </S.WorkSection>
      <S.AboutMeSection id="aboutMe">
        <AboutMe />
      </S.AboutMeSection>
      <S.ConnectSection id="connect">
        <Connect />
      </S.ConnectSection>
      <Footer />
    </S.Wrapper>
  )
}

export default Home
