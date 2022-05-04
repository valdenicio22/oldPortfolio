import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
`

export const WelcomeSection = styled.div`
  width: 100%;
  padding: 7rem 0;
  min-height: 70rem;
`

export const WorkSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 7rem 0;
  min-height: 70rem;
  height: 100%;
`
export const AboutMeSection = styled.div`
  width: 100%;
  padding: 7rem 0;
  min-height: 70rem;
  height: 100%;
`
export const ConnectSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 7rem 0;
  min-height: 70rem;
  height: 100%;
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
