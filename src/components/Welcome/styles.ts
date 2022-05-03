import styled from 'styled-components'

export const WelcomeContainer = styled.section`
  width: 112rem;
  margin: 0 auto;
  height: 68rem;

  display: flex;
  align-items: center;
`
export const ImgContainer = styled.div`
  width: 52rem;
  margin-top: -7rem;
`

export const WelcomeMesgContainer = styled.div`
  width: 52rem;
  margin-top: -7rem;
`

export const WelcomeMsg = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  line-height: 7rem;
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const Msg = styled.p`
  line-height: 7rem;
  font-size: ${({ theme }) => theme.font.sizes.large};
  padding-bottom: 1.5rem;
`
