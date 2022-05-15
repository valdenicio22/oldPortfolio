import styled, { css } from 'styled-components'

export const ConnectContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.bold};
    margin: 3rem 0 4rem;
  `}
`

export const Msg = styled.p`
  ${({ theme }) => css`
    width: 100%;
    line-height: 3rem;
    margin-bottom: 7rem;
    max-width: 40rem;

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

export const FormContainer = styled.form`
  max-width: 55rem;
`
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

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    border: none;
    outline: none;
    border-radius: 0.25rem;

    padding: 1.5rem;

    border-left: 8px solid ${theme.colors.primary};
  `}
`
export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};

    border: none;
    outline: none;
    border-radius: 0.25rem;
    padding: 1.65rem;

    border-left: 8px solid ${theme.colors.primary};
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
