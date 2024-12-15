import React from 'react'

const Square = ({colorValue,hexValue,IsDarkText}) => {
  return (
    <section
    className='square'
    style={{
      backgroundColor:colorValue,
      color: IsDarkText ? "#000" : "#FFF"
    }}
    >
      <p>{colorValue ? colorValue : "empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}
Square.defaultProps = {
  colorvalue : "Empty color Value"
}


export default Square