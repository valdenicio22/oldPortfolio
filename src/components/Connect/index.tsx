import * as S from './styles'
import Marker from 'components/Marker'

const Connect = () => {
  return (
    <S.Wrapper>
      <S.ConnectContainer>
        <S.SmallTitleContainer>
          <Marker />
          <S.SmallTitle>Connect</S.SmallTitle>
        </S.SmallTitleContainer>

        <S.Title>Interested in working with me or perhaps just talk</S.Title>

        <S.Msg>
          React me on social media, by filling out the contact form or by
          sending an email to <strong>valdenicio22@gmail.com</strong>
        </S.Msg>

        <S.FormContainer>
          <S.FieldsGroup>
            <S.Label htmlFor="name">What is your name?</S.Label>
            <S.InputContainer>
              <S.Input type="text" id="name" required />
            </S.InputContainer>
          </S.FieldsGroup>

          <S.FieldsGroup>
            <S.Label htmlFor="email">Your email address</S.Label>
            <S.InputContainer>
              <S.Input type="email" id="email" required />
            </S.InputContainer>
          </S.FieldsGroup>

          <S.FieldsGroup>
            <S.Label htmlFor="message">Type your message here</S.Label>
            <S.Textarea id="message" rows={4} cols={50} required />
          </S.FieldsGroup>

          <S.BtnConnect>Send message</S.BtnConnect>
        </S.FormContainer>
      </S.ConnectContainer>
    </S.Wrapper>
  )
}

export default Connect
