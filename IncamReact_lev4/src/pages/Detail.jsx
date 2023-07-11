import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetFindTodoRTKQuery, useUpdateTodoRTKMutation } from '../redux/api/todortkquery'
import Comments from '../components/Comments'

function Detail() {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data} = useGetFindTodoRTKQuery(id)
  const [edit,setEdit] = useState(false)
  const [input, setInput] = useState("")
  const [updateRTK] = useUpdateTodoRTKMutation()

  useEffect(()=> {
    data && setInput(data.content)
  },[data])

  const onSumitHandler = () => {
    setEdit(pre=>!pre)
    edit && updateRTK({id:data.id, content:input})
  }

  return (
    <>
    <div onClick={()=>navigate(-1)}>이전으로</div>
    {edit 
      ? <textarea type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      : data && <div>
      <h2>{data.title}</h2>
      <p>ID : {data.id}</p>
      <p>내용 : {data.content}</p>
      </div>}
      <button onClick={onSumitHandler}>{edit ? "저장" : "수정"}</button>
      {!edit && data &&  <Comments id={data.id}/>}
    </>
  )
}

export default Detail