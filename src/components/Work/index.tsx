import Marker from 'components/Marker'
import * as S from './styles'
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'
import { LogoVercel, LogoGithub } from '@styled-icons/ionicons-solid'

import { projects } from '../../Mock/projects'
import { useState } from 'react'

type ProjectsData = {
  id: number
  name: string
  description: string
  img: string
}

const Work = () => {
  const projectsData: ProjectsData[] = [...projects]
  const [currentProject, setCurrentProject] = useState(0)

  return (
    <S.Wrapper>
      <S.SmallTitleContainer>
        <Marker />
        <S.SmallTitle>Connect</S.SmallTitle>
      </S.SmallTitleContainer>

      <S.Title>Hand-picked projects for you to see.</S.Title>

      <S.WorkContainer>
        <S.ProjectInfoContainer>
          <S.BtnsPaginationContainer>
            <S.Btn onClick={() => setCurrentProject((prev) => prev - 1)}>
              <ArrowLeft width={22} height={22} />
            </S.Btn>
            <p>
              {currentProject + 1}/{projectsData.length}
            </p>
            <S.Btn onClick={() => setCurrentProject((prev) => prev + 1)}>
              <ArrowRight width={22} height={22} />
            </S.Btn>
          </S.BtnsPaginationContainer>

          <S.ProjectDetailsContainer>
            <S.ProjectTitle>{projectsData[currentProject].name}</S.ProjectTitle>
            <S.ProjectType>
              <Marker size="small" /> Web development
            </S.ProjectType>

            <S.ProjectDescription>
              {projectsData[currentProject].description}
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
}

export default Work
