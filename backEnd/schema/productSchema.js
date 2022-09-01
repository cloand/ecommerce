const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category : {
        type:[String],
        required:true
    },
    inStock : {
        type:Boolean,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    visitedCount:{
        type:Number,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    size:{
        type:[String],
        required:true
    },
    color:{
        type:[String],
        required:true
    },
    slug:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('product',productSchema,'product')

