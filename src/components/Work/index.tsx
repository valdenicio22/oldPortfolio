import Marker from 'components/Marker'
import * as S from './styles'
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'
import { LogoVercel, LogoGithub } from '@styled-icons/ionicons-solid'

import { projectsData } from '../../Mock/projects'
import { useState } from 'react'
import { Project } from '../../types/types'
import Link from 'next/link'
import MediaMatch from 'components/MediaMatch'

const Work = () => {
  const projects: Project[] = [...projectsData]
  const [currentProject, setCurrentProject] = useState(0)

  return (
    <S.WorkContainer>
      <S.IntroContainer>
        <Marker>Work</Marker>
        <S.Title>Hand-picked projects for you to see.</S.Title>
      </S.IntroContainer>

      <S.ProjectInfoContainer>
        <S.PaginationContainer>
          <S.Btn
            disabled={currentProject <= 0 && true}
            onClick={() => setCurrentProject((prev) => prev - 1)}
          >
            <ArrowLeft width={22} height={22} />
          </S.Btn>
          <S.CurrentPage>
            {currentProject + 1} / {projects.length}
          </S.CurrentPage>
          <S.Btn
            disabled={currentProject >= projects.length - 1 && true}
            onClick={() => setCurrentProject((prev) => prev + 1)}
          >
            <ArrowRight width={22} height={22} />
          </S.Btn>
        </S.PaginationContainer>

        <S.ProjectDetailsContainer>
          <S.ProjectName>{projects[currentProject].name}</S.ProjectName>

          <Marker size="small">About the project</Marker>
          <S.ProjectDescription>
            {projects[currentProject].description}
          </S.ProjectDescription>

          <Marker size="small">Built with</Marker>
          <S.ProjectDescription>
            {projects[currentProject].technologies.map((technology, i) => {
              if (i === projects[currentProject].technologies.length - 1)
                return `${technology}.`
              return `${technology}, `
            })}
          </S.ProjectDescription>

          <Marker size="small">Project Highlights</Marker>
          <S.ProjectDescription>
            {projects[currentProject].highlights.map((highlight, i) => {
              if (i === projects[currentProject].highlights.length - 1)
                return `${highlight}.`
              return `${highlight}, `
            })}
          </S.ProjectDescription>
        </S.ProjectDetailsContainer>
        <MediaMatch greaterThan="medium">
          <S.ExternalMedias>
            {!!projects[currentProject].online && (
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              <Link href={projects[currentProject].online!} passHref>
                <S.Media target="_blank">
                  <LogoVercel width={25} height={25} /> Visit Online
                </S.Media>
              </Link>
            )}
            <Link href={projects[currentProject].github} passHref>
              <S.Media target="_blank">
                <LogoGithub width={25} height={25} /> Visit Github
              </S.Media>
            </Link>
          </S.ExternalMedias>
        </MediaMatch>
      </S.ProjectInfoContainer>

      <S.ProjectImgContainer>
        <S.Img
          src={projects[currentProject].img}
          alt={projects[currentProject].name}
        />
        <MediaMatch lessThan="medium">
          <S.ExternalMedias>
            {!!projects[currentProject].online && (
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              <Link href={projects[currentProject].online!} passHref>
                <S.Media target="_blank">
                  <LogoVercel width={25} height={25} /> Visit Online
                </S.Media>
              </Link>
            )}
            <Link href={projects[currentProject].github} passHref>
              <S.Media target="_blank">
                <LogoGithub width={25} height={25} /> Visit Github
              </S.Media>
            </Link>
          </S.ExternalMedias>
        </MediaMatch>
      </S.ProjectImgContainer>
    </S.WorkContainer>
  )
}

export default Work
