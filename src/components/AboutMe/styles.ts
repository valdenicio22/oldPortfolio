import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.containers.regularDesktop};
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const AboutMeInfoContainer = styled.div`
  max-width: 68rem;
  width: 100%;
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
  margin-top: 3.2rem;
  margin-bottom: 10rem;
`

//Who am I section description
export const DetailsContainer = styled.div`
  padding-bottom: 4rem;
`

export const Description = styled.ul`
  padding-top: 2rem;

  .person {
    svg {
      margin-right: -0.2rem;
    }
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.sizes.large};

  strong {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`

export const SkillsToolsItem = styled.p`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.sizes.large};

  strong {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`

export const AboutMePhotoContainer = styled.div`
  width: 58rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Photo = styled.div`
  width: fit-content;
  height: fit-content;

  img {
    width: 32rem;
    height: 32rem;

    border-radius: 50%;
    filter: grayscale(90%);
  }
`
