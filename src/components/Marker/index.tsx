import * as S from './styles'

export type MarkerProps = {
  size?: 'small'
}

const Marker = ({ size }: MarkerProps) => <S.Wrapper size={size} />

export default Marker
