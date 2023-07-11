import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import NewTodos from './pages/NewTodos'
import DetailList from './pages/DetailList'
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home />}/>
        <Route path='createtodo' element={<NewTodos/>}/> 
        <Route path='detail' element={<DetailList/>} />
        <Route path='detail/:id' element={<Detail/>}/>  
      </Route>
    </Routes>
  )
}

export default App
