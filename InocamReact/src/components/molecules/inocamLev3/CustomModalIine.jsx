import React from 'react'
import { ModalLine, ModalOut } from './customStyled'

function CustomModalIine({title, type, onClick, children}) {

  return (
    <>
    <ModalOut onClick={onClick}/>
    <ModalLine type={type}>
      {title}
      {children}
    </ModalLine>
    </>
  )
}

export default CustomModalIine