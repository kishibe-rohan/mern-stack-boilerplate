import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    title:String,
    description:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

var BlogMessage = mongoose.model('BlogMessage',blogSchema)

export default BlogMessage;