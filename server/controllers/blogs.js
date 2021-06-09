import BlogMessage from '../models/blogModels.js'
import mongoose from 'mongoose'

export const getPosts = async (req,res) => {
   try{
    const blogMessages = await BlogMessage.find();
    //console.log(blogMessages);
    res.status(200).json(blogMessages)
   }catch(error)
   {
       res.status(404).json({message:error.message})
   }
 }

