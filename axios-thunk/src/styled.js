import { styled } from "styled-components"

const Form = styled.form`
  box-sizing: border-box;
  width: 500px;
  height: 50px;
  background-color:${({$state}) => $state === "update" ? "green" : "yellow"};
  display: flex;
  align-items: center;
  position: fixed;
  transition: 0.5ms linear;
  left: 0;
  bottom: 0;
  margin: 0;

  input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 30px;
  }
`

const UpdateForm = styled(Form)`
  bottom: ${({$position}) => $position ? "0" : "-50px"};
`


const TodosBox = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 50px;
  border: 1px solid black;
  background-color: black;
  color: white;
  margin: 10px;
  gap:4px
`

export {Form, UpdateForm, TodosBox} 
