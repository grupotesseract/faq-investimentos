import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Slide } from 'spectacle'

import components from './components'

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="#404552" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)
