import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'
import Welcome from '.'

describe('<Welcome />', () => {
  it('should render the Welcome', () => {
    renderWithThemeProvider(<Welcome />)
  })
})
