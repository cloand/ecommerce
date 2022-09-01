const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        required:true
    }
})

module.exports = mongoose.model('image',imageSchema,'image')