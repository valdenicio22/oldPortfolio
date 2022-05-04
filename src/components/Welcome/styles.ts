import styled from 'styled-components'

export const WelcomeContainer = styled.section`
  max-width: ${({ theme }) => theme.containers.regularDesktop};
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`
export const ImgContainer = styled.div``

export const WelcomeMsgContainer = styled.div``

export const WelcomeMsg = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  line-height: 9rem;
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const Msg = styled.p`
  line-height: 9rem;
  font-size: ${({ theme }) => theme.font.sizes.large};
  padding-bottom: 2rem;
`
