import express from "express";
import {mongoDBURL, PORT} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
app.get('/',(request,response) => {
    console.log(request)
    return response.status(234).send("hai i am gay")
})

app.post('/books',async (request,response) => {
    try {
        if(
            !request.body.title || 
            !request.body.author || 
            !request.body.PublishYear
        ){
            return response.status(400).send({
                message : 'send all required fields :title,author, PublishYear',
            })
        }

        const newbook = {
            title :request.body.title,
            author:request.body.author,
            PublishYear:request.body,PublishYear,
        }
        const bookk = await Book.create(newbook)
        
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message : error.message})
    }
})

app.get('/books',async (request,response) => {
    try {
        const books = await Book.find({})
        return response.status(201).json(books)
    } catch (error) {
        console.log(error.message)
        return response.status(500).send({message:error.message})
    }
})

mongoose
   .connect(mongoDBURL)
   .then(() => {
    console.log(`App is connected to database`)
    app.listen(PORT,() => {
        console.log(`App is listening to port ${PORT}`);
    })
   })
   .catch((error) => {
    console.log(error);
   })

