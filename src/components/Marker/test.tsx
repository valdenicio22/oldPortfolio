import Marker from '.'
import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'

describe('<Marker />', () => {
  it('should render the Marker', () => {
    renderWithThemeProvider(<Marker>Who am i</Marker>)
  })
})
