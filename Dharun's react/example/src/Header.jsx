import { useState } from "react"

function Header()
{
   const styles={
    "width":"100px","height":"100px","backgroundColor":"red","text-align":"centre"
   }
   const [count,setcount]=useState(0);
   const[inctext,setinctext]=useState("inc")
   const[dectext,setdectext]=useState("dec")
   const[col,setcolor]=useState("red")
   function increment()
   {
    setcount(count+1)
    setinctext("hello")
    console.log("1")
   }
   function decrement()
   {
    setcount(count-1)
    setdectext("hi")
    console.log("2")
   }
   function changecolor(v)
   {
    setcolor(v.target.value)
    console.log(col)
   }
   return(
    <>
    <h1>Hello everyone</h1>
    <button onClick={increment}>{inctext}</button>
    <button onClick={decrement}>{dectext}</button>
    <input type="text" onChange={changecolor}></input>
    <div style={{...styles,backgroundColor:col}}>{count}</div>
    </>
   )
}
export default Header