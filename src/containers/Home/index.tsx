import Header from '../../components/Header'
import Welcome from '../../components/Welcome'
import Work from '../../components/Work'
import AboutMe from '../../components/AboutMe'
import Connect from '../../components/Connect'
import Footer from '../../components/Footer'
import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <Header id="header" />
      <S.Section id="welcome">
        <Welcome />
      </S.Section>
      <S.Section id="work" changeBg={true}>
        <Work />
      </S.Section>
      <S.Section id="aboutMe">
        <AboutMe />
      </S.Section>
      <S.Section id="connect" changeBg={true}>
        <Connect />
      </S.Section>
      <Footer />
    </S.Wrapper>
  )
}

export default Home
