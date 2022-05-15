import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const WorkContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.5fr 2.5fr;
    grid-template-areas:
    'IntroContainer .'
    'ProjectInfoContainer ProjectImgContainer';
    gap: 5rem 3rem;
  `}

  ${media.greaterThan('large')`
    gap: 7rem 5rem;
  `}
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  ${media.greaterThan('medium')`
    grid-area: IntroContainer;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: ${theme.font.weight.bold};
    margin-top: 3rem;
  `}
`

export const ProjectInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  ${media.greaterThan('medium')`
    grid-area: ProjectInfoContainer;
  `}
`

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin: 2rem 0 3rem;

  ${media.greaterThan('large')`
    margin: 0rem 0 4rem;
  `}
`

export const Btn = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBg};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const CurrentPage = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`

export const ProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
export const ProjectName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.bold};
    margin-bottom: 2rem;
  `}
`

export const ProjectDescription = styled.p`
  margin: 1rem 0 2rem;
`

export const ProjectImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding-top: 1rem;

  ${media.greaterThan('medium')`
    grid-area: ProjectImgContainer;
    padding-top: 10rem;
  `}
`

export const Img = styled.img`
  ${({ theme }) => css`
    max-width: 50rem;
    width: 100%;
    max-height: 50rem;
    border-radius: ${theme.border.radius};
  `}
`

export const ExternalMedias = styled.div`
  max-width: 50rem;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`

export const Media = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 5px solid black;

    border: none;
    outline: none;

    display: flex;
    align-items: center;
    gap: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
