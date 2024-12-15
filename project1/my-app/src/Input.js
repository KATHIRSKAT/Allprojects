import React from 'react'

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label> Add Color Name:</label>
      <input 
      autoFocus
      type="text" 
      placeholder='Add color name'
      required
      value = {colorValue}
      onChange={(e) => {setColorValue(e.target.value),setHexValue(colorNames(e.target.value))
      }}
      />

      <button
      type='button'
      onClick={() => setIsDarkText(!isDarkText)}
      >
        toggle Text color
      </button>



    </form>
  )
}

export default Input