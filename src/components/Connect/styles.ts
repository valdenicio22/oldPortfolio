import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.containers.regularDesktop};
  width: 100%;
  margin: 0 auto;
`

export const ConnectContainer = styled.div`
  max-width: 60rem;
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
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-top: 3.2rem;
  margin-bottom: 3rem;
`

export const Msg = styled.p`
  ${({ theme }) => css`
    line-height: 3rem;
    margin-bottom: 7rem;
    max-width: 40rem;
    width: 100%;

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

export const FormContainer = styled.form``
export const FieldsGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 2.5rem;
`
export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    padding-bottom: 0.5rem;
  `}
`

export const InputContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    border-left: 8px solid ${theme.colors.primary};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    border: none;
    outline: none;
    border-radius: 0.25rem;

    width: 50rem;
    margin: 1rem 0;
    padding: 0 1.5rem;
  `}
`
export const Textarea = styled.textarea`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    border: none;
    outline: none;
    border-radius: 0.25rem;
    border-left: 8px solid ${theme.colors.primary};
    padding: 0 1.65rem;
  `}
`

export const BtnConnect = styled.button`
  ${({ theme }) => css`
    width: 18rem;
    padding: 1.3rem 1.5rem;
    border-radius: 0.4rem;
    border: none;
    outline: none;

    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }

    text-align: center;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};

    margin-top: 2rem;
  `}
`
