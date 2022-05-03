import BtnLink from 'components/BtnLink'
import * as S from './styles'

export type WelcomeProps = {
  id: 'welcome'
}

const Welcome = ({ id }: WelcomeProps) => (
  <S.WelcomeContainer id={id}>
    <S.WelcomeMesgContainer>
      <S.WelcomeMsg>
        Hey, Im <strong>Valdenício</strong>
        <br /> a Front-end developer
      </S.WelcomeMsg>
      <S.Msg>Stick around to see some of my work.</S.Msg>
      <BtnLink section="#work">See my work</BtnLink>
    </S.WelcomeMesgContainer>
    <S.ImgContainer></S.ImgContainer>
  </S.WelcomeContainer>
)

export default Welcome
