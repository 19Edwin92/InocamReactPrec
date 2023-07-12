import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useDeleteTodoCommentRTKMutation, useGetCommentRTKQuery, usePostTodoCommentRTKMutation, useUpdateTodoCommentRTKMautation, useUpdateTodoCommentRTKMutation } from '../redux/api/todortkquery'

function Comments({id}) {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState({
    nackName:"",
    comment:""
  })

  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setInput({...input, [name]:value})
  }

  // 댓글가져오기 
  const {data, isLoading} = useGetCommentRTKQuery(id)

  const [postComment] = usePostTodoCommentRTKMutation(id)

  const onSubmitHandler = () => {
    postComment({id:Date.now(), Todoid:id, ...input})
    setInput({
      nackName:"",
      comment:""
    })
  }

  return (
    <CommentsST $state={show} >
      <h2 onClick={()=>setShow(pre=>!pre)} >{show ? "눌러서 댓글 내리기" : "눌러서 댓글보기"}</h2>
      <input value={input.nackName} type='text' placeholder='이름을 입력하세요(5자 이내)' name='nackName' maxLength={5} onChange={onChangeHandler}/>
      <input value={input.comment} type='text' placeholder='댓글을 추가하세요(100자 이내)' name='comment' maxLength={100} onChange={onChangeHandler}/>
      <input type='button' value="추가하기" onClick={onSubmitHandler}/>
      <div style={{height:"300px", overflow:"auto"}}>
      {data && data.map(comment => <div key={comment.id}>
      <UpdateInput comment={comment}/>
        
        </div>)}
      </div>
    </CommentsST>
  )
}

export default Comments

const UpdateInput = ({comment}) => {
    const [edit, setEdit] = useState(false)
  const [input2, setInput2] = useState("")
  const onEdieChangeHandler = (e) => {
    setInput2(e.target.value)
  }
  const [deleteComment] = useDeleteTodoCommentRTKMutation()
  const onCommentDelete = (id) => () => {
    deleteComment(id)
  }

  const [updateComment] = useUpdateTodoCommentRTKMutation()
  const onUpdateCommentHandler = (id) => () => {
    updateComment({id, comment:input2})
    setEdit(pre =>!pre)
  }

  return (<>
  {edit 
      ? <>
      <input value={input2} type='text' onChange={onEdieChangeHandler}/>
      <button onClick={()=> setEdit(false)}>취소하기</button>
    <button onClick={onUpdateCommentHandler(comment.id)}>변경하기</button>
    </>
      : <>해당TODO :{comment.Todoid}, 작성자: {comment.nackName}, 내용 {comment.comment}
      <button onClick={onCommentDelete(comment.id)}>삭제하기</button>
      <button onClick={()=>setEdit(pre =>!pre)}>수정하기</button></>
    }
  </>)
}

const CommentsST = styled.div`
  position: absolute;
  width: 800px;
  height: ${({$state}) => $state ? "400px" : "30px"};
  background-color: #ffff6d;
  bottom: 0;
  overflow: hidden;
  transition: height 400ms ease-in-out;


`