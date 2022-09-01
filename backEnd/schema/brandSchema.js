const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('brand',brandSchema,'brand')