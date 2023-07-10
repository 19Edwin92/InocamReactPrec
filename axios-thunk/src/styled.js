import { keyframes, styled } from "styled-components"

const slideUp = keyframes`
  from {
    bottom: -50px;
  }
  
  to {
    bottom: 0;
  }
`

const slideUpRTK = keyframes`
  from {
    bottom: -50px;
  }
  
  to {
    bottom: 50px;
  }
`

const Form = styled.form`
  box-sizing: border-box;
  width: 500px;
  height: 50px;
  background-color:${({$state}) => $state === "update" ? "green" : "yellow"};
  display: flex;
  align-items: center;
  position: fixed;
  transition: 0.25ms linear;
  left: 0;
  bottom: 0;
  margin: 0;
  

  input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 30px;

    &:focus {
      outline: none;
    }
  }
`

const UpdateForm = styled(Form)`
  animation:  ${slideUp} 0.2s linear; 
`

const RTKForm = styled(Form)`
  background-color:${({$state}) => $state === "update" ? "green" : "blue"};
  bottom: 50px;
`
const UpdateRTKForm = styled(RTKForm)`
  animation:  ${slideUpRTK} 0.2s linear; 
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

export {Form,RTKForm, UpdateForm, UpdateRTKForm, TodosBox} 
