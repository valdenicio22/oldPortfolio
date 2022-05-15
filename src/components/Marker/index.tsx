import * as S from './styles'

export type MarkerProps = {
  size?: 'small'
  children: string
}

const Marker = ({ size, children }: MarkerProps) => (
  <S.Wrapper>
    <S.Marker size={size}></S.Marker>
    {children}
  </S.Wrapper>
)

export default Marker
