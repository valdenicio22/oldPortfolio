import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'

import Header from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    renderWithThemeProvider(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
