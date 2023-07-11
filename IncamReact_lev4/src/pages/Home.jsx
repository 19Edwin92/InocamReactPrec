import React from 'react'
import { HomeActicle } from '../styled'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <section>
      <h2>무엇을 할까요?</h2>
      <HomeActicle type="button" onClick={()=> navigate("/createtodo")}>할일 기록하기</HomeActicle>
      <HomeActicle type="button" onClick={()=> navigate("/detail")} >TODO LIST</HomeActicle>
    </section>
  )
}

export default Home