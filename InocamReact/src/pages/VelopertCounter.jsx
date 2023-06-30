import React from 'react'
import styled from "styled-components";

function VelopertCounter({counters, onIncrement, onDecrement, onSetColor, onCreate, onRemove}) {
  const CounterList =  counters.map((counter, i) => (
    <Counter
      key={i}
      onClick={()=>onIncrement(i)}
      onDoubleClick={()=>onSetColor(i)}
      // onContextMenu={(e) => {e.preventDefault(); onDecrement();}} 
      style={{backgroundColor: counter.color}} >
        {counter.counter}
      </Counter>
  ))


  return (
    <div>
      <div>
        <button onClick={onCreate}>생성</button>
        <button onClick={onRemove}>제거</button>
      </div>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {CounterList}
      </div>
    </div>
  )
}

      /* <Counter
        onClick={onIncrement} 
        onContextMenu={(e) => {e.preventDefault(); onDecrement();}} 
        onDoubleClick={onSetColor}
        style={{backgroundColor: color}}>
          {number}
      </Counter> */

// VelopertCounter.defaultProps = {
//   number: 0,
//   color: 'black',
//   onIncrement: () => console.warn('onIncrement not defined'),
//   onDecrement: () => console.warn('onDecrement not defined'),
//   onSetColor: () => console.warn('onSetColor not defined')
// };

export default VelopertCounter

const Counter = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    background-color: black;

     /* 색상 */
    color: white;

    /* 폰트 */
    font-size: 3rem;

    /* 기타 */
    border-radius: 100%;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.75s;
`