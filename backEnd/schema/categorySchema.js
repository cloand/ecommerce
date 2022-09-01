const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('category',categorySchema,'category')