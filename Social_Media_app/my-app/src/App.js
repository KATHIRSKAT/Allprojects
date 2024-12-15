
import { useState,useEffect } from 'react';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { Route, useNavigate,Routes } from 'react-router-dom';
import {format} from 'react'
import api from "./api/posts"
import EditPost from './EditPost';

function App() {
  const [posts,setPosts]=useState([])
  const [search,setSearch] = useState('')
  const [searchResult,setSearchResult]=useState([])
  const [postTitle,setPostTitle] =useState('')
  const [postBody,setPostBody] = useState('')
  const [editTitle,setEditTitle] =useState('')
  const [editBody,setEditBody] = useState('')
  const navigate = useNavigate()

  useEffect(() =>{
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts');
        setPosts (response.data);
      } 
      catch(err) 
      {
        if (err.response) 
        {  
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers); 
        } 
        else
        {
          console.log(`Error : ${err.message}`);
        }
      }
    }
  fetchPosts(); []})

  useEffect (() => {
    const filteredResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes (search. toLowerCase())
    || ((post.title).toLowerCase()).includes (search. toLowerCase())) ;
    setSearchResult (filteredResults.reverse());[posts,search]})


  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts [posts.length - 1].id + 1: 1;
    const datetime = format(new Date(), 'MMMM dd,yyyy pp');
    const newPost = { id, title: postTitle, datetime,
    body: postBody };
    try{
      const response = await api.post('/posts',newPost)
      const allPosts = [...posts, response.data];
      setPosts (allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    }
    catch(err) 
    {
      if (err.response) 
      {  
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers); 
      } 
      else
      {
        console.log(`Error : ${err.message}`);
      }
    }
  }
  const handleEdit = async (id) =>{
    const datetime = format(new Date(), 'MMMM dd,yyyy pp');
    const updatePost = { id, title: editTitle, datetime,
    body: editBody };
    try{
      const response = await api.put(`/posts/${id}`,updatePost)
      setPosts (posts.map(post => post.id === id ?{... response.data} : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    }
    catch{
      console.log(`Error : ${err.message}`);
    }

  }

const handleDelete = async (id) =>{
  try{
    await api.delete(`/posts/${id}`)
    const postDelete = posts.filter(post => post.id !== id);
    setPosts(postDelete);
    navigate('/');
  }
  catch{
    console.log(`Error : ${err.message}`);
  }
}
  return (
    <div className="App">
      <Header title = "KADHAL SOCIAL MEDIA"/>
      <Nav 
      search={search}
      setSearch={setSearch}
      />
      <Routes>
        <Route path ="/" element={ <Home 
          posts={searchResult}
        />} />
        <Route path="/post">
          <Route index element = {
           <NewPost 
           handleSubmit={handleSubmit}
           postTitle={postTitle}
           setPostTitle={setPostTitle}
           postBody={postBody}
           setPostBody={setPostBody}
          />
          } />
          <Route path =":id" element={<PostPage 
          posts={posts} handleDelete ={handleDelete}/>} />
        </Route>
        <Route path = '/edit:id' element={<EditPost />} />
        <Route path ="/about" element ={
          <About />
        } />
        <Route path ="*" element = {
          <Missing />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
