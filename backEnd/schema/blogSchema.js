const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    blogCategory:{
        type:[String],
        required:true
    }
})

module.exports = mongoose.model('blog',blogSchema,'blog')