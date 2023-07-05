import { useState } from "react"
import { SelectModal, SelectModalBtn } from "../components/molecules/inocamLev3/customStyled"

export const useSelect = () => {
  const [select1, setSelect1] = useState("리액트")
  const [select2, setSelect2] = useState("리액트")
  const [selectModal1, setSelecModal1] = useState(false)
  const [selectModal2, setSelecModal2] = useState(false)

  const onClickHandler = (setState, setModal) => (e) => {
    setState(e.target.dataset.value)
    setModal(pre => !pre)
  }

  const onMouseHandler = () => {
    setSelecModal1(false)
    setSelecModal2(false)
  }

  const SelectModal1 = (
    <SelectModal position="absolute">
      <SelectModalBtn data-value="리액트" onClick={onClickHandler(setSelect1, setSelecModal1)}>리액트</SelectModalBtn>
      <SelectModalBtn data-value="자바" onClick={onClickHandler(setSelect1,setSelecModal1)}>자바</SelectModalBtn>
      <SelectModalBtn data-value="스프링" onClick={onClickHandler(setSelect1,setSelecModal1)}>스프링</SelectModalBtn>
      <SelectModalBtn data-value="리액트네이티브" onClick={onClickHandler(setSelect1,setSelecModal1)}>리액트네이티브</SelectModalBtn>
    </SelectModal>)

  const SelectModal2 = (
    <SelectModal>
      <SelectModalBtn data-value="리액트" onClick={onClickHandler(setSelect2, setSelecModal2)}>리액트</SelectModalBtn>
      <SelectModalBtn data-value="자바" onClick={onClickHandler(setSelect2, setSelecModal2)}>자바</SelectModalBtn>
      <SelectModalBtn data-value="스프링" onClick={onClickHandler(setSelect2, setSelecModal2)}>스프링</SelectModalBtn>
      <SelectModalBtn data-value="리액트네이티브" onClick={onClickHandler(setSelect2, setSelecModal2)}>리액트네이티브</SelectModalBtn>
    </SelectModal>)

  return {select1, select2, selectModal1, setSelecModal1, selectModal2, setSelecModal2, SelectModal1, SelectModal2, onMouseHandler}
}