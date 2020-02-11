import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Deck } from 'spectacle'

import slides, { transitions } from './presentation/index.mdx'
import OneDarkTheme from './presentation/theme'
import './presentation/index.css'

require('normalize.css')

const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
}

const creeperTransition = (transitioning, forward) => {
  const offset = forward ? 100 : -100
  return {
    transform: `
      translate3d(0,${transitioning ? offset : 0}%, 0)
    `,
  }
}

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Deck transition={['fade']} transitionDuration={500} theme={OneDarkTheme}>
      {slides.map((Slide, i) => {
        let transition = transitions[i] || null
        return <Slide transition={transition} key={`slide-${i}`} />
      })}
    </Deck>
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require('./presentation/theme').default
    const newSlides = require('./presentation/index.mdx').default
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Deck transition={[creeperTransition]} transitionDuration={500} theme={newTheme}>
          {newSlides.map((Slide, i) => {
            let transition = transitions[i] || null
            return <Slide transition={transition} key={`slide-${i}`} />
          })}
        </Deck>
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
