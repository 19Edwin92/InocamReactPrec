import React from 'react'
import { useDeleteTodoRTKMutation, useGetTodoRTKQuery } from '../redux/api/todortkquery' 
import { HomeActicle } from '../styled';
import { useNavigate } from 'react-router-dom';


function DetailList() {
  const {data} = useGetTodoRTKQuery()
  const [deleteRTKquery] = useDeleteTodoRTKMutation()
  const navigate = useNavigate()
  return (
    <>
    {data && data.map(todo => <HomeActicle key={todo.id} type="button" onClick={()=>navigate(`/detail/${todo.id}`)}>
      <h2>{todo.title}</h2>
      <p>작성자 : {todo.nackName}</p>
      <button onClick={() => deleteRTKquery(todo.id)}>삭제하기</button>
      </HomeActicle>)}
    </>
  )
}

export default DetailList