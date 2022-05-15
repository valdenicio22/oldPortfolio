import BtnLink from 'components/BtnLink'
import Marker from 'components/Marker'
import * as S from './styles'
import { Laptop, Person, Briefcase } from '@styled-icons/bootstrap'

const AboutMe = () => {
  return (
    <S.AboutMeContainer>
      <S.IntroContainer>
        <Marker>About</Marker>
        <S.Title>Get a closer look at who I am.</S.Title>
      </S.IntroContainer>
      <S.PhotoContainer>
        <S.Img
          src="https://avatars.githubusercontent.com/u/40251933?v=4"
          alt="My profile photo"
        />
      </S.PhotoContainer>
      <S.AboutMeInfoContainer>
        <S.DetailsContainer>
          <Marker size="small">Who am I</Marker>

          <S.DetailsList>
            <S.Item>
              <Person />
              Im Valdenício Ferreira, 29 years old and from Brazil.
            </S.Item>

            <S.Item>
              <Laptop />
              Im a web developing student, mainly focused on frontend
              technologies.
            </S.Item>

            <S.Item>
              <Briefcase />
              Im currently on career transition.
            </S.Item>
          </S.DetailsList>
        </S.DetailsContainer>

        <S.DetailsContainer>
          <Marker size="small">Skills &amp; Tools</Marker>

          <S.DescriptionX>
            <S.SkillsToolsItem>
              <strong>Development:</strong> JavaScript, Typescript, ReactJs,
              NextJs, Styled-Component, CSS, HTML.
            </S.SkillsToolsItem>

            <S.SkillsToolsItem>
              <strong>Tools:</strong> Figma, VsCode, Github.
            </S.SkillsToolsItem>
          </S.DescriptionX>
        </S.DetailsContainer>

        <BtnLink section="#connect">Get in Touch</BtnLink>
      </S.AboutMeInfoContainer>
    </S.AboutMeContainer>
  )
}

export default AboutMe
