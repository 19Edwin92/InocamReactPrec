import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import axios from 'axios'
import {styled} from 'styled-components'

const token = null

/* AXIOS ------------------------------------------------------------------ */
/* 
  네트워크 통신 라이브러리 
  (1) 인스턴스 생성
  (2) 인터셉터 가능 >> 통신라이브러리 >> 요청(클 -> 서)과 응답(서 -> 클)
      요청 클라 -- (어떤 동작) --> 서버
      응답 서버 -- (어떤 동작) --> 클라
*/
const instance = axios.create({
  baseURL:"http://localhost:3001/"
}) // todos 

// const instance3004 = axios.create({
//   baseURL:"http://localhost:3004/"
// }) // Users

// instance.interceptors.request.use(
//   function (config) {
//     console.log("인터셉터 요청 성공!");
//     config.headers.Authorization = token ? `Bearer ${token}` : "";
//     return config
//   },
//   function (error) {
//     console.log("인터셉터 요청 오류!");
//     return Promise.reject(error)
//   } 
// )

// instance.interceptors.response.use(
//   function (config) {
//     console.log("인터셉터 응답 성공!");
//     return config
//   },
//   function (error) {
//     console.log("인터셉터 응답 오류!");
//     return Promise.reject(error)
//   } 
// )

/* App.js ------------------------------------------------------------------- */

function App() {
  
  // AXIOS GET 기능구현 : CRUD (1) READ
  const [todos, setTodos] = useState()
  const getTodos = async () => {
    const res = await instance.get("/todos");
    setTodos(res.data);
  }; // 비동기통신으로 서버의 데이터를 불러올 getTodos 만들었죠. 호출해야 동작을 하는데 언제 호출할까? // (1) 해당 컴포넌트에 접근했을 때 // (2) 서버 데이터가 변경되었을 때 
  
  useEffect(()=>{  
    getTodos() // AXIOS POST (3) 서버에 다시 요청을 해서, todos와 서버의 데이터를 동기화 합니다. 
  },[todos]) // 의존선배열이 변경되면, useEffect 그때마다 동작을 하니까 

  // AXIOS POST 기능구현 : CRUD (2) CREATE
  const [newtodos, setNewTodos] = useState("")
  const onChangeInput = (e) => {
    setNewTodos(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    await instance.post("/todos", {id:Date.now(), title:newtodos})  // 비동기통신 // (1) 서버를 업데이트 
    setTodos([...todos, {id:Date.now(), title:newtodos}]) // (2) 리렌더링을 발생시키기 위해서, todos의 상태를 변경합니다. 
    setNewTodos("")
  }

  return (
    <div>
      <p>JSON-Server</p>
      <Form onSubmit={onSubmitHandler}>
        <input value={newtodos} type='text' onChange={onChangeInput} maxLength={10}/>
      </Form>
      {todos && todos.map(({id, title}) => <Todos key={id} todoid={id} title={title} todos={todos} setTodos={setTodos}/>)}
    </div>
  )
}

export default App


const Todos = ({todoid, title, todos, setTodos}) => {
    // AXIOS DELETE 기능구현 : CRUD (3) DELETE
  const onDeleteHandler = async () => {
    await instance.delete(`/todos/${todoid}`) // 비동기통신 // (1) 서버를 업데이트 
    setTodos([...todos.filter(todo => todo.id !== {todoid})]) // (2) 리렌더링을 발생시키기 위해서, todos의 상태를 변경합니다. 
  }

  // AXIOS UPDATE 기능구현 : CRUD (4) UPDATE
  const [update,setUpdate] = useState(false) // 조건부 렌더링
  const onUpdateHandler = () => {
    setUpdate(pre => !pre)
  }
  
  const [updatetodos, setUpdateTodos] = useState(title) // 수정할 title의 valuse
  const onChangeInput = (e) => {
    setUpdateTodos(e.target.value)
  }

  const onSubmitHandler = (todoid) => async (e) => {
    e.preventDefault()
    await instance.patch(`/todos/${todoid}`, {title:updatetodos}) // PATCH(일부데이터만 수정할 때), PUT(완전히 다 바꿈, 덮어쓰기) (1) 서버를 업데이트
    setTodos([...todos.map(todo => todo.id === todoid ? {...todo, title:updatetodos} : todo)]) // (2) 리렌더링 
    setUpdate(pre=>!pre)
  }

  return (
    <TodosBox>
        <button onClick={onDeleteHandler}>삭제</button>
        <button onClick={onUpdateHandler}>수정</button>
        {update 
          ? (<>
              <p>{title}</p>
              <Form onSubmit={onSubmitHandler(todoid)} $state="update">
                <input value={updatetodos} type='text' onChange={onChangeInput} maxLength={10}/>
              </Form>
            </>)
          : <p>{title}</p>}
    </TodosBox>
  )
}

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
