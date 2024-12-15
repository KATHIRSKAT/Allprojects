import React,{useEffect,useState} from 'react'
import axios from 'axios'
import spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { response } from 'express'


const Home = () => {
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    setLoading(true);
    axios
        .get('http://localhost:5555/books')
        .then((response) => {
            setBooks(response.data.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
  return (
    <div>Home</div>
  )
}

export default Home