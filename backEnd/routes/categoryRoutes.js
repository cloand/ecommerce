const express = require('express')
const routes = express.Router()
const Category = require('../schema/categorySchema')


// get all categories

routes.get('/',async(req,res) =>{
    try{
        const category = await Category.find()
        res.json(category)
    }catch{
        res.json('err message')
    }
})

// get 3 categories

routes.get('/get-three-categories',async(req,res) =>{
    try{
        const category = await Category.find()
        category.slice(0,4)
        res.json(category)
    }catch{
        res.json('err message')
    }
})




module.exports = routes