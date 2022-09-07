const express = require('express')
const routes = express.Router()
const Product = require('../schema/productSchema')

routes.get('/:id',async(req,res) => {
    try{
        const products = await Product.find()
        const filtered = products.filter((item,index) => (item.name.match(req.params.id) || item.slug.match(req.params.id)));
        res.json(filtered)
    }catch(e){
        console.log({message:e.message})
    }
})

module.exports = routes;