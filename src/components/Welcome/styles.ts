import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const WelcomeContainer = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    width: 100%;
    margin: 0 auto;
    min-height: 40rem;

    display: flex;
    align-items: center;

    ${media.greaterThan('medium')`
      gap: 10rem;
      justify-content: space-between;
    `}
  `}
`
export const WelcomeMsgContainer = styled.div``

export const WelcomeMsg = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    line-height: 5.5rem;

    ${media.greaterThan('large')`
      font-size: 4.8rem;
    `}

    span {
      font-size: ${theme.font.sizes.xxlarge};

      ${media.greaterThan('large')`
        font-size: 3.5rem;
      `}
    }
    strong {
      color: ${theme.colors.primary};
    }
  `}
`
export const Msg = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('large')`
        font-size: ${theme.font.sizes.xlarge};
    `}
    padding: 2rem 0 4rem;
  `}
`
export const ImgContainer = styled.div`
  /* width: 30rem;
  height: 30rem;
  background-color: red; */
`
