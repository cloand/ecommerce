const express = require('express')
const route = express.Router()
const Image = require('../schema/imageSchema')


//get all images

route.get('/',async(req,res)=>{
    try{
        const images = await Image.find()
        res.json(images);
    }catch(e){
        res.status(400).json({message:e.message})
    }
})

//get single image

route.get('/:_id',async(req,res)=>{
    try{
        const image = await Image.find()
        res.json(image.find((item) => item._id === req.params._id));
    }catch(e){
        res.status(400).json({message:e.message})
    }
})


module.exports = route