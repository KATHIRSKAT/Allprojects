const express=require('express')
const app=express()
const path=require('path')
const PORT=process.env.PORT || 3500;

app.get('^/$|/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/new-page.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'new-page.html'));
})
app.listen(PORT,()=>console.log('Server running on port ${PORT}'));