import mongoose from "mongoose"

const bookschema = mongoose.Schema(
    {
        title : {
            type : String,
            require:true,
        },
        author : {
            type : String,
            require:true,
        },
        PublishYear : {
            type : Number,
            require:true,
        },
    },
    {
        timestamps :true,
    }
)

export const Book = mongoose.model('cat',{name : bookschema})