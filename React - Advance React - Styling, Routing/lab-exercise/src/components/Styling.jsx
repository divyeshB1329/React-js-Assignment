import React from 'react'
import './styling.css'

const Styling = () => {
    let internal = {
        backgroundColor:"yellow",
        color:"red",
        fontSize:"25px",
    }
  return (
    <>
      <p style={{backgroundColor:"red"}}>Inline css in react</p>
      <p style={internal}>internal css in react</p>
      <p>External CSS in react</p>
    </>
  )
}

export default Styling
