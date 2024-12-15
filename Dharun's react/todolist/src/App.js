import { useState,useEffect } from "react";
import Listitem from "./Listitem";

function App() {
  const API_URL="http://localhost:5000/students";
  const[search,setsearch]=useState("")
  const[add,setadd]=useState("")
  const [items,setitems]=useState([])
  useEffect(()=>{
    const fetchItems= async() => {
    try
    {
        const response=await fetch(API_URL)
        if(response.ok)
        {
          const storeditems=await response.json()
          setitems(storeditems)
        }
        else
        {
          throw new error("404")
        }
    }
    catch(err)
    {
      console.log(err)
    }
  };
  fetchItems();
}, []);

  function handleinput(e)
  {
    setadd(e.target.value)
    
  }
  function additem()
  {
    const newitems={id:items.length+1,name:add}
    async function poststudents()
    {
      try{
        const response=await fetch(url,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newitems)
        })
        if(response.ok)
        {
          const newitem=await response.json();
          const newitems=[...items,newitem]
          setitems(newitems)
        }
        else
        {
          console.log("404")
        }
      }
      catch(err)
      {
        console.log(err)
      }
    }
    poststudents();
    
  }
  function searchitem(e)
  {
    const newitem=e.target.value
    setsearch(newitem)
    if (newitem !== "") {
      const filteredItems = items.filter((item) => item.name === newitem);
      setitems(filteredItems);
  } else {
      const storedItems = JSON.parse(localStorage.getItem("todolist"));
      setitems(storedItems || []); // Reset to original items
  }
  }
  function handledelete(i)
  {
    async function deleteitem()
    {
      try{
        const response=await fetch(API_URL+"${id}",{
          method:"DELETE"
        })
        if(response.ok)
        {
          const newlist=items.filter((item)=>item.id!==id)
          setitems(newlist)
        }
        else
        {
          console.log("404")
        }
      }
      catch(err)
      {
        console.log(err)
      }
    }
    
    deleteitem();
  }
  return (
    <>
    <input onChange={handleinput} placeholder="Add item"></input>
    <button onClick={additem}></button>
    <input onChange={searchitem} placeholder="Search-item"></input>
    <Listitem 
    items={items}
    handledelete={handledelete}
    />
    </>
  );
}

export default App;
