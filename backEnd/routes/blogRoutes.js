const express = require('express');
const routes = express.Router();
const Blog = require('../schema/blogSchema')


// get all blogs 

routes.get('/',async(req,res) =>{
    try{
        const blog = await Blog.find()
        res.json(blog)
    }catch{
        res.json('err message')
    }
})

// get latest three articles

routes.get('/get-latest-three-articles',async(req,res) =>{
    try{
        const blog = await Blog.find()
        const result = blog.sort((a,b) => new Date(b.date) - new Date(a.date))
        res.json(result)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})

// get blog by id

routes.get('/:_id',async(req,res) =>{
    try{
        const blog = await Blog.find()
        const result = blog.filter((item) => item._id === req.params._id)
        res.json(result)
    }catch{
        res.json('err message')
    }
})



module.exports = routes