import BtnLink from 'components/BtnLink'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const Welcome = () => {
  return (
    <S.WelcomeContainer>
      <S.WelcomeMsgContainer>
        <S.WelcomeMsg>
          Hey, Im <strong>Valdenício</strong>
          <br /> <span>a Front-end developer</span>
        </S.WelcomeMsg>
        <S.Msg>Stick around to see some of my work.</S.Msg>
        <BtnLink section="#work">See my work</BtnLink>
      </S.WelcomeMsgContainer>
      <MediaMatch greaterThan="medium">
        <S.ImgContainer></S.ImgContainer>
      </MediaMatch>
    </S.WelcomeContainer>
  )
}

export default Welcome
