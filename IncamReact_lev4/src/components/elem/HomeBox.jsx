import React from 'react'
import { HomeList } from './elem'

function HomeBox({children}) {
  return (
    <HomeList>
      {children}
    </HomeList>
  )
}

export default HomeBox



