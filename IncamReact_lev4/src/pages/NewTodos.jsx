import React, { useState } from 'react'
import { css, styled } from 'styled-components';
import { usePostTodoRTKMutation } from '../redux/api/todortkquery';
import { useNavigate } from 'react-router-dom';

function NewTodos() {
  const [inputValue, setInput] = useState({
    nackName:"",
    title:"",
    content:""
  })
  
  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setInput({...inputValue, [name]:value})

  }


  const navigate = useNavigate()
  const [postRTKquery] = usePostTodoRTKMutation()
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(inputValue.nackName && inputValue.title && inputValue.content){
      postRTKquery(inputValue)
      setInput({
        nackName:"",
        title:"",
        content:""
      })
      if(window.confirm("TODO 리스트로 이동하시겠습니까? \n 추가입력을 원하시면 취소를 클릭해주세요.")) {
        navigate('/detail')
      } 
    }
    
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>작성자</h2>
      <CustomInput type='text' value={inputValue.nackName} name='nackName' placeholder='작성자의 이름을 입력해주세요.(5자 이내)' maxLength={5} onChange={onChangeHandler}/>
      <h2>제목</h2>
      <CustomInput type='text' value={inputValue.title} name='title' placeholder='제목을 입력해주세요.(50자 이내)' maxLength={20} onChange={onChangeHandler}/>
      <h2>내용</h2>
      <CustomTextAreaLayout $count={inputValue.content.length}>
        <CustomInput as="textarea" value={inputValue.content} type='text' name='content' placeholder='내용을 입력해주세요.(200자 이내)' maxLength={200} onChange={onChangeHandler}/>
        <div className='textcount' >{!inputValue.content.length 
          ? "000" 
          : inputValue.content.length < 10
          ? `00${inputValue.content.length}`
          : inputValue.content.length < 100
          ? `0${inputValue.content.length}`
          : inputValue.content.length}</div>
      </CustomTextAreaLayout>
      <CustomInput type='submit' value="추가하기"/>
    </form>
  )
}

export default NewTodos

const CustomInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  height: 50px;

  ${({as}) => as === "textarea"  && css`
    resize: none;
    height: 100px;
  `}
  ${({type}) => type === "submit" && css`
    background-color: orange;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
  `}
`

const CustomTextAreaLayout = styled.div`
  position: relative;

  .textcount {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: ${({ $count }) => $count > 150 ? "red" :  $count > 100 ? "orange" : "gray" };
  }
`