import React, { useState } from "react";
import styled from "styled-components";

const DraggableContainer = () => {
  const [items, setItems] = useState([
    { id: "item-1", content: "아이템 1" },
    { id: "item-2", content: "아이템 2" },
    { id: "item-3", content: "아이템 3" },
    { id: "item-4", content: "아이템 4" },
    { id: "item-5", content: "아이템 5" },
    { id: "item-6", content: "아이템 6" },
    { id: "item-7", content: "아이템 7" },
    { id: "item-8", content: "아이템 8" },
    { id: "item-9", content: "아이템 9" },
    { id: "item-10", content: "아이템 10" },
  ]);

  // const [moveItem, setMoveIten] = useState(null)
  const handleDragStart = (e, id) => {
    e.dataTransfer.effectAllowed = 'move'; // 드래그시 발생되었던 + 버튼이 사라진다. 
    e.dataTransfer.setData("text/plain", id);
    // setMoveIten(id)
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    // const draggedItemIndex = items.findIndex((item) => item.id === moveItem);
    // if (draggedItemIndex > -1 && draggedItemIndex !== index) {
    //   const draggedItem = items[draggedItemIndex];
    //   const newItems = items.filter((item) => item.id !== moveItem);
    //   newItems.splice(index, 0, draggedItem);
    //   setItems(newItems);
    // }
  };

  const handleDrop = (e, index) => {
    const itemId = e.dataTransfer.getData("text/plain");
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex > -1) {
      const newItems = [...items];
      const [draggedItem] = newItems.splice(itemIndex, 1);
      newItems.splice(index, 0, draggedItem);
      setItems(newItems);
      // setMoveIten(null)
    }
  };

  //  Drag and Drop 
  const [draggableItems, setDraggableItems] = useState([
    { id: 'draggable-1', text: 'Draggable 1' },
    { id: 'draggable-2', text: 'Draggable 2' }
  ]);
  const [droppedItems, setDroppedItems] = useState([]);

  return (
    <>
      <h2>DragandDrop</h2>
      <h3> API에서 지원되는 Events</h3>
      <ul>
        <li>onDrag : item을 잡았을 때 발생</li>
        <li>onDragEnter : 잡은 Item이 다른 Item이랑 겹쳤을 때 발생</li>
        <li>onDragLeave : 잡은 item이 다른 Item을 떠났을 때 발생</li>
        <li>onDragOver : 잡은 Item이 다른 Item과 겹쳤을 때, /ms 마다 발생</li>
        <li>onDragStart : Item을 잡기 시작했을 때 발생</li>
        <li>onDrog : 잡은 Item을 적절한 곳에 놓았을 때 발생</li>
        <li>onDragEnd : 잡은 Item을 놓았을 때 발생</li>
      </ul>

      <p>아래 예제 1번의 사례는 onDragStart(해당 태그를 집었을 때), onDragOver(요소가 겹쳤을 때), onDrop(해당 태그를 놓았을 때) 3개의 함수에 의해서 제어된다. </p>
      <p>
        <strong>onDragStart</strong> : 인자로 이벤트 객체와, 해당 요소의 id를 가져간다. 
        그리고 해당 id를 이벤트 객체의 " e.dataTransfer.setData("text/plain", id);"에 등록한다. 
        여기서 <strong>dataTransfer</strong>은 드래그 앤 드롭 작업 중에 전달할 데이터를 설정하는 매서드로, 드래그 앤 드롭 작업에 사용되는 데이포를 객체로 포함한다. 
        전달되는 매개변수로는 MIME 타입과 내용을 전달한다. 위의 경우에서는 "text/plain"(일반 텍스트) 타입을 선언하고, 매개변수로 "id"를 식별자로 하여 전달한다. 
        객체에 저장은 setData()가 활용되고, 호출은 getData("text/plain")를 통해거 가져온다. 
      </p>
      <p>
        <strong>onDragOver</strong> : 잡은 Item이 다른 Item과 겹쳤을 때 발생되는 동작을 설정하는데, 
        e.preventDefault() 와 같이, 동작에 대한 설정을 실행하지 않겠다는 것으로, 드래그 중인 아이템이 드롭 대상 위에 놓일 수 있음을 브라우넞에게 알린다. 
        즉 드래그 중인 아이템이 다른 요소 위에서 이동할 때 해당 요소에 허용되는 것이다. 현재 코드는 사이가 벌어지는 것이 아니라, 미리 해당 요소를 넣어두는 그런 방법을 사용했다. 그러나 개선이 필요하다. 
      </p>
      <p>
        <strong>handleDrop</strong> : 마지막으로 동작이 종결되었을 때, getData를 가져오고, 해당 부분에서 해당 아이디에 대한 index 위치를 추출한다.
        index 번호가 존재하면, 새로운 배열을 만들고, 새로 만들 배열에서 해당 index에 대한 값을 추출하여, 변경된 인덱스에 넣어주고, 이를 반환한다. 
      </p>

      
     <div style={{display:"flex", gap:"10px"}}>
     <Container
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        {items.map((item, index) => (<Item
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, item.id)}
          onDragOver={(e)=> handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.content}
        </Item>)
        )}
      </Container>
      <Container2>
        <DragOrigin
          onDragOver={(e)=>e.preventDefault()}
          // onDrop={(e)=> {
          //   const id = e.dataTransfer.getData('text/plain')
          //   const draggableElement = document.getElementById(id);
          //   const dropzone = e.target;
          //   dropzone.appendChild(draggableElement);
          // }}
          onDrop={(e)=> {
            const id = e.dataTransfer.getData('text/plain')
            // const draggableElement = document.getElementById(id);
            // const dropzone = e.target;
            // dropzone.appendChild(draggableElement);
            const droppdItem = droppedItems.find(item => item.id === id)
            if (droppdItem) {
              setDroppedItems((prevItems) => prevItems.filter(item => item.id !== id));
              setDraggableItems((prevItems) => [...prevItems, droppdItem]);
            }
          }}
        >
           {/* {draggableItems.map(item => (
          <MoveItem draggable key={item.id}>{item.text}</MoveItem>
        ))} */}
           <MoveItem id="draggable-1" draggable onDragStart={(e) => {
            e.dataTransfer.effectAllowed = 'move'; 
            e.dataTransfer.setData('text/plain', e.target.id)
          }}>Draggable</MoveItem>
        </DragOrigin>
        <DropZone
          onDragOver={(e)=>e.preventDefault()}
          onDrop={(e)=> {
            const id = e.dataTransfer.getData('text/plain')
            // const draggableElement = document.getElementById(id);
            // const dropzone = e.target;
            // dropzone.appendChild(draggableElement);
            const droppdItem = draggableItems.find(item => item.id === id)
            if (droppdItem) {
              setDraggableItems((prevItems) => prevItems.filter(item => item.id !== id));
              setDroppedItems((prevItems) => [...prevItems, droppdItem]);
            }
          }}
        >dropzone
        {droppedItems.map(item => (
          <MoveItem draggable key={item.id}>{item.text}</MoveItem>
        ))}
        </DropZone>
      </Container2>
     </div>
    </>
  );
};

export default DraggableContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid black;
  padding: 20px;
  width: 400px;
  margin-left:20px;
`;


const Item = styled.div`
  width: 100px;
  height: 50px;
  background-color: lightgray;
  margin-right: 10px;
  cursor: grab;
  z-index: ${(props) => (props.isDragging ? 1 : "auto")};
`;


const Container2 = styled(Container)`
  border: 2px solid #DFA612;
  color: black;
  display: flex;
  font-family: sans-serif;
  font-weight: bold;

`

const DragOrigin = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  padding: 10px;
  
`

const MoveItem = styled.div`
  background-color: #4AAE9B;
  font-weight: normal;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  &:active {
    background-color:yellow;
  }
`

const DropZone = styled.div`
  background-color: #6DB65B;
  flex-basis: 100%;
  flex-grow: 1;
  padding: 10px;
`

  // const draggedItem = useRef(null);
  // const handleDragStart = (e, id) => {
  //   e.dataTransfer.setData("text/plain", id);
  //   draggedItem.current = id;
  // };

// // import React, { useRef, useState } from 'react'
// import React, { useRef } from 'react'
// import { styled } from 'styled-components'

// function DragandDrop() {
//   // Layout의 영역에 대한 Ref
//   const LayoutRef = useRef(null)
//   // DragMe의 영역에 대한 Ref
//   const DragMeRef = useRef(null)
//   // Drag 전 포지션
//   // const [originPos, setOriginPos] = useState({x:0, y:0})
//   // Drag 후 포지션
//   // const [clicentPos, setclientPos] = useState({x:0, y:0})
//   // 실제 Drag 할 요소가 위치하는 표지션값

//   return (
//     <div>

//       <Layout ref={LayoutRef}>
//           <DragMe
//             draggable
//             // onDragStart={(e) => console.log(e.dataTransfer)}
//             ref={DragMeRef}
//             children="Drag me! 🦊"/>
//           <DragMe
//             draggable
//             children="Drag me! 🐸"/>
//       </Layout>
//     </div>
//   )
// }

// export default DragandDrop

// const Layout = styled.div`
//   width: 500px;
//   height: 500px;
//   margin: 30px auto;
//   background-color: lightgrey;
//   border: 5px solid black;
// `

// const DragMe = styled.div`
//   width: 100px;
//   height: 20px;
//   text-align: center;
//   background-color: lightpink;
// `
