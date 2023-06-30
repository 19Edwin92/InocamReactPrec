import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, selectColor } from '../redux/modules/velopertColor';

function VelopertColor() {
  const color = useSelector(selectColor)
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  return (
    <div>
      <h1>VelopertColor</h1>
      <p style={{color:`${color}`, fontWeight:"800", fontSize:"2rem"}}>{color}</p>
      <div className="colors" style={{display:"flex"}}>
        {colors.map(color => (
          <PaletteItem color={color} key={color}/>
        ))}
      </div>
    </div>
  )
}

export default VelopertColor


const PaletteItem = ({ color }) => {
  const dispatch = useDispatch()
  return (
    <div
      style={{ width:"100px",height:"100px",backgroundColor: color}}
      onClick={()=>dispatch(changeColor(color))}
    />
  );
  }