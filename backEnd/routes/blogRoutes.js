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
        const result = blog.sort((a,b) => {
            let dateA = a.date.split('T')[0]
            let timeA = a.date.split('T')[1]
            let dateB = b.date.split('T')[0]
            let timeB = b.date.split('T')[1]
            dateA = dateA.split('-')
            timeA = timeA.split('-')
            dateB = dateB.split('-')
            timeB = timeB.split('-')
            if(dateB[0] < dateA[0]){
                return true
            }else if(dateB[0] === dateA[0] && dateB[1] < dateB[1]){
                return true
            }else if(dateB[1] === dateA[1] && dateB[2] < dateB[2]){
                return true
            }else if(dateB[2] === dateB[2] && timeB[0] < timeA[0]){
                return true
            }else if(timeB[0] === timeA[0] && timeB[1] < timeA[1]){
                return true
            }else if(timeB[1] === timeA[1] && timeB[2] < timeA[2]){
                return true;
            }else{
                return false;
            }
            return false
        })
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