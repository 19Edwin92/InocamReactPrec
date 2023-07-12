import React from 'react'
import { TiTle } from './elem'

function Text({children, ...rest}) {
  return (
    <TiTle {...rest}>{children}</TiTle>
  )
}

export default Text

