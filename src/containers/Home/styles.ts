import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
`

export const WorkSection = styled.div`
  width: 100%;
  height: 68rem;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`
export const AboutMeSection = styled.div`
  width: 100%;
  height: 68rem;
`
export const ConnectSection = styled.div`
  width: 100%;
  height: 68rem;
  background-color: white;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
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
