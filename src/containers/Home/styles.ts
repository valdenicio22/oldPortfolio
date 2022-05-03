import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
`

export const WelcomeSection = styled.div`
  width: 100%;
  height: 68rem;
  border: 2px solid red;
`
export const WorkSection = styled.div`
  width: 100%;
  height: 68rem;
  background-color: white;
  border: 2px solid green;
  color: black;
`
export const AboutMeSection = styled.div`
  width: 100%;
  height: 68rem;
  border: 2px solid yellow;
`
export const ConnectSection = styled.div`
  width: 100%;
  height: 68rem;
  background-color: white;
  border: 2px solid pink;
  color: black;
`
export const FooterContainer = styled.div`
  width: 112rem;
  margin: 0 auto;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CopyRight = styled.p``

export const LinksContainer = styled.div``

export const SocialMedia = styled.a`
  margin-right: 2rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`
