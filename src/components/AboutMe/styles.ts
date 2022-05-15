import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type Props = {
  isAboutMeVisible?: boolean
}

export const AboutMeContainer = styled.div`
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
    'AboutMeInfoContainer PhotoContainer';
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
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  margin: 3rem 0;
`
export const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  ${media.greaterThan('medium')`
    grid-area: PhotoContainer;

    align-items: flex-start;
  `}
`

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  filter: grayscale(90%);

  ${media.greaterThan('medium')`
    width: 32rem;
    height: 32rem;
  `}

  ${media.greaterThan('large')`
    width: 40rem;
    height: 40rem;
  `}
`

const AboutMeModifiers = {
  isVisible: () => css`
    opacity: 0;
  `
}

export const AboutMeInfoContainer = styled.div<Props>`
  ${({ isAboutMeVisible }) => css`
    max-width: 68rem;
    width: 100%;
    opacity: 1;
    transition: opacity 250ms ease-in;

    ${isAboutMeVisible && AboutMeModifiers.isVisible()};

    ${media.greaterThan('medium')`
      grid-area: AboutMeInfoContainer;
    `}
  `}
`

export const DetailsContainer = styled.div`
  padding-bottom: 3rem;
`
//Marker Who am I

export const DetailsList = styled.div`
  padding-top: 2rem;
`
export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    & > svg {
      max-width: 2.5rem;
      width: 100%;
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('medium')`
      & > svg {
        max-width: 3rem;
        width: 100%;
      }
    `}

    margin-bottom: 1.5rem;
  `}
`

//Marker Skill & Tools
export const DescriptionX = styled.ul`
  padding-top: 2rem;
  list-style: none;
`

export const SkillsToolsItem = styled.p`
  ${({ theme }) => css`
    margin-bottom: 1rem;

    strong {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.medium};

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.large};
      `}
    }
  `}
`
