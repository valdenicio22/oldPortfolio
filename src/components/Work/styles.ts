import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.containers.regularDesktop};
  width: 100%;
  margin: 0 auto;
`

export const SmallTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const SmallTitle = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.large};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 3.2rem;
  margin-bottom: 15rem;

  max-width: 45rem;
`

export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 55rem 1fr;
`

export const ProjectInfoContainer = styled.div``

export const BtnsPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 4rem;
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

export const ProjectDetailsContainer = styled.div``
export const ProjectTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 3rem;
`

export const ProjectType = styled.p`
  margin: 4rem 0;

  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const ProjectDescription = styled.p``

export const ProjectsBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const ProjectsBtn = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    margin-top: 4rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;

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

export const ProjectImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50rem;
    height: 50rem;
  }
`
