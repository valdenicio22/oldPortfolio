import Header from 'components/Header'
import * as S from './styles'
import Welcome from '../../components/Welcome'
import AboutMe from '../../components/AboutMe'
import Connect from '../../components/Connect'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WelcomeSection id="welcome">
        <Welcome />
      </S.WelcomeSection>
      <S.WorkSection id="work">
        <h1>Work Section</h1>
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
