import Marker from 'components/Marker'
import * as S from './styles'
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'
import { LogoVercel, LogoGithub } from '@styled-icons/ionicons-solid'

const Work = () => (
  <S.Wrapper>
    <S.SmallTitleContainer>
      <Marker />
      <S.SmallTitle>Connect</S.SmallTitle>
    </S.SmallTitleContainer>

    <S.Title>Hand-picked projects for you to see.</S.Title>

    <S.WorkContainer>
      <S.ProjectInfoContainer>
        <S.BtnsPaginationContainer>
          <S.Btn>
            <ArrowLeft width={22} height={22} />
          </S.Btn>
          <p>01/03</p>
          <S.Btn>
            <ArrowRight width={22} height={22} />
          </S.Btn>
        </S.BtnsPaginationContainer>

        <S.ProjectDetailsContainer>
          <S.ProjectTitle>Noyer</S.ProjectTitle>
          <S.ProjectType>
            <Marker size="small" /> WordPress WebShop
          </S.ProjectType>

          <S.ProjectDescription>
            Noyer is a Danish design company that crafts handmade quality
            products in American walnut wood. The work I do for Noyer consists
            of helping them building/maintaining their
          </S.ProjectDescription>

          <S.ProjectsBtns>
            <S.ProjectsBtn>
              <LogoVercel width={25} height={25} /> Visit Online
            </S.ProjectsBtn>
            <S.ProjectsBtn>
              <LogoGithub width={25} height={25} /> Visit Github
            </S.ProjectsBtn>
          </S.ProjectsBtns>
        </S.ProjectDetailsContainer>
      </S.ProjectInfoContainer>
      <S.ProjectImgContainer>
        <img src="/img/joinMe.png" alt="JoinMe" />
      </S.ProjectImgContainer>
    </S.WorkContainer>
  </S.Wrapper>
)

export default Work
