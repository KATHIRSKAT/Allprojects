
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const api_URL ='https://jsonplaceholder.typicode.com/'
  const [reqType,setReqType] = useState('users')
  const [items,setItems] =useState([])
  useEffect( () =>{
    const fetchItems = async () => {
    try {
      const response = await fetch(`${api_URL}${reqType}`);
      const data = await response.json();
      setItems(data);
    }
    catch(err){
      console.log(err);
    }
  }
  fetchItems();},[reqType])
  return (
    <div>
       <Form 
        reqType={reqType}
        setReqType={setReqType} />
      <List
        items = {items} />
    </div>
   
  )
}
export default App;
