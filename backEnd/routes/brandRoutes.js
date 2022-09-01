const express = require('express');
const routes = express.Router();
const Brand = require('../schema/brandSchema')


// get all brands

routes.get('/',async(req,res) =>{
    try{
        const brand = await Brand.find()
        res.json(brand)
    }catch{
        
        res.json({ error: err })
    }
})

//get brand by ID

routes.get('/:_id',async(req,res) =>{
    try{
        const brand = await Brand.find()
        const result = brand.find((item) =>item._id === req.params._id)
        res.json(result)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})


module.exports = routes

