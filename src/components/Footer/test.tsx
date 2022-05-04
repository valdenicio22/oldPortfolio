import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    renderWithThemeProvider(<Footer />)
  })
})
