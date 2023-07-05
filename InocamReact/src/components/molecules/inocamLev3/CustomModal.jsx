import React from 'react'
import { Layout } from './customStyled'
import { useModal } from '../../../hooks/useModal'

function CustomModal() {
  const  { ModalBtn, modal, modal2,Styledmodal, Styledmodal2} = useModal()

  return (
    <Layout direction="column">
      <h2>Modal</h2>
      <Layout>
        {ModalBtn}
        {modal && Styledmodal}
        {modal2 && Styledmodal2}
      </Layout>
    </Layout>
  )
}


export default CustomModal

