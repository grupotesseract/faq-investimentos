import createSpectacleTheme from 'spectacle/lib/themes/default'
import merge from 'deepmerge'

const createTheme = (colors, fonts, overrides = {}) => {
  let theme = createSpectacleTheme(colors, fonts)
  theme.screen = merge(theme.screen, overrides)
  return theme
}

export default createTheme
