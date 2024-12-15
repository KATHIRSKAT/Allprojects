import React from 'react'

const Button = ({reqType,setReqType,buttonText}) => {
  return (
    <button
    className= {buttonText === reqType ? "selected" : null}
    onClick={() => setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button