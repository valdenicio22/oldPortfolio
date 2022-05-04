import BtnLink from 'components/BtnLink'
import * as S from './styles'

const Welcome = () => (
  <S.WelcomeContainer>
    <S.WelcomeMsgContainer>
      <S.WelcomeMsg>
        Hey, Im <strong>Valdenício</strong>
        <br /> a Front-end developer
      </S.WelcomeMsg>
      <S.Msg>Stick around to see some of my work.</S.Msg>
      <BtnLink section="#work">See my work</BtnLink>
    </S.WelcomeMsgContainer>
    <S.ImgContainer></S.ImgContainer>
  </S.WelcomeContainer>
)

export default Welcome
