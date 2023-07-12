import React from 'react'
import { HomeActicle, Linner } from '../styled'
import { useNavigate } from 'react-router-dom'
import Text from '../components/elem/Text'

function Home() {
  const navigate = useNavigate()
  return (
    <Linner $padding="20px">
      <Text $size="1.5rem" $fw="800" children="무엇을 할까요?"/>
      <HomeActicle type="button" onClick={()=> navigate("/createtodo")}>할일 기록하기</HomeActicle>
      <HomeActicle type="button" onClick={()=> navigate("/detail")} >TODO LIST</HomeActicle>
    </Linner>
  )
}

export default Home