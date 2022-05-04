import BtnLink from 'components/BtnLink'
import Marker from 'components/Marker'
import * as S from './styles'
import { Laptop, Person, Briefcase } from '@styled-icons/bootstrap'

const AboutMe = () => {
  return (
    <S.Wrapper>
      <S.AboutMeInfoContainer>
        <S.SmallTitleContainer>
          <Marker />
          <S.SmallTitle>About</S.SmallTitle>
        </S.SmallTitleContainer>
        <S.Title>Get a closer look at who I am.</S.Title>

        <S.DetailsContainer>
          <S.SmallTitleContainer>
            <Marker size="small" />

            <S.SmallTitle>Who am I</S.SmallTitle>
          </S.SmallTitleContainer>

          <S.Description>
            <S.Item className="person">
              <Person width={20} height={20} color="#ec3f6e" />
              Im Valdenício Ferreira, 29 years old and from Brazil.
            </S.Item>

            <S.Item>
              <Laptop width={18} height={18} color="#ec3f6e" />
              Im a web developing student, mainly focused on frontend
              technologies.
            </S.Item>

            <S.Item>
              <Briefcase width={18} height={18} color="#ec3f6e" />
              Im currently on career transition.
            </S.Item>
          </S.Description>
        </S.DetailsContainer>

        <S.DetailsContainer>
          <S.SmallTitleContainer>
            <Marker size="small" />

            <S.SmallTitle>Skills &amp; Tools</S.SmallTitle>
          </S.SmallTitleContainer>

          <S.Description>
            <S.SkillsToolsItem>
              <strong>Development:</strong> JavaScript, Typescript, ReactJs,
              NextJs, Styled-Component, HTML.
            </S.SkillsToolsItem>

            <S.SkillsToolsItem>
              <strong>Tools:</strong> Figma, VsCode, Github.
            </S.SkillsToolsItem>
          </S.Description>
        </S.DetailsContainer>

        <BtnLink section="#connect">Get in Touch</BtnLink>
      </S.AboutMeInfoContainer>
      <S.AboutMePhotoContainer>
        <S.Photo>
          <img
            src="https://avatars.githubusercontent.com/u/40251933?v=4"
            alt="My profile photo"
          />
          {/* <img src="/img/me.png" alt="My profile picture" /> */}
        </S.Photo>
      </S.AboutMePhotoContainer>
    </S.Wrapper>
  )
}

export default AboutMe
