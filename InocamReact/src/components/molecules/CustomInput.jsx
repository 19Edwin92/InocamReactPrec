import React from 'react'

function CustomInput({legend,value, onChange}) {
  return (
    <fieldset>
        <legend>{legend}</legend>
        <input
          value={value}
          type="text"
          onChange={onChange}
        />
      </fieldset>
  )
}

export default CustomInput