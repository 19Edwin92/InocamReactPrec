import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')

function App() {
  const [sendmsg, setSendMsg] = useState("")
  const [Roomnum, setRoomnum] = useState(0)
  const [msg, setMsg] = useState([])
  const sendMessage = () => {
    socket.emit("send_message", {message:sendmsg})
  }

  const onClickHandler = () => {

  }

  useEffect(()=> {
    socket.on("receive_message", data => {
      setMsg([...msg, data.message])
    })
  }, [msg])
  return (
    <div>
      <h2>socket 테스트</h2>
      <input type="test" placeholder="Message..." onChange={(e) => setSendMsg(e.target.value)}/>
      <button onClick={sendMessage}>메시지 제출</button>
      <input type="number" placeholder="Message..." onChange={(e) => setRoomnum(e.target.value)}/>
      <button onClick={onClickHandler}>룸연결</button>
      {msg && msg.map(msg => <p>{msg}</p>)}
    </div>
  )
}

export default App