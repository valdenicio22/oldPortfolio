import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'

import AboutMe from '.'

describe('<AboutMe />', () => {
  it('should render the AboutMe', () => {
    renderWithThemeProvider(<AboutMe />)
  })
})
