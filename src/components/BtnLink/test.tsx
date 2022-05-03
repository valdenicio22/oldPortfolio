import BtnLink from '.'
import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'

describe('<BtnLink />', () => {
  it('should render the BtnLink', () => {
    renderWithThemeProvider(<BtnLink section="#work">See my work</BtnLink>)
  })
})
