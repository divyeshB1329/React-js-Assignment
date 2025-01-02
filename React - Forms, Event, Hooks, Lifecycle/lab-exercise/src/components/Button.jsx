import React, { useState } from 'react'

const Button = () => {
    let [value, setValue] = useState("Not clicked")
    let change = () => {
        setValue("Clicked")
    }
  return (
    <div style={{margin: "50px"}}>
      <button style={{width: "100px", height: "50px"}} onClick={change}>{value}</button>
    </div>
  )
}

export default Button
