const express = require('express');
const routes = express.Router();
const Product = require('../schema/productSchema')

// get all products
routes.get('/', async(req,res)=>{
    try{
        const product = await Product.find()
        res.json(product)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})

// get five featured products

routes.get('/get-featured-products',async(req,res)=>{
    try{
        const product = await Product.find()
        const sorted = product.sort((a,b) => b.visitedCount-a.visitedCount)
        const featured = sorted.slice(0,5)
        res.json(featured)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})

// get five latest products

routes.get('/get-latest-products',async(req,res)=>{
    try{
        const product = await Product.find()
        const sorted = product.sort((a,b) => b.date-a.date)
        const latest = sorted.slice(0,5)
        res.json(latest)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})

// get five best product of week

routes.get('/get-best-product-of-week',async(req,res)=>{
    try{
        const product = await Product.find()
        const sorted = product.sort((a,b) => b.date-a.date)
        const topFive = sorted.slice(0,5)
        const result = topFive.sort((a,b) => b.visitedCount - a.visitedCount)
        res.json(result)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})



// get product by ID

routes.get('/:id',async(req,res) => {
    try{
        const product = await Product.find()
        const result = product.find((item) => item._id == req.params.id)
        res.json(result)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})


module.exports = routes;