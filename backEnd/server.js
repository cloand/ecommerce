const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors())



mongoose.connect('mongodb://localhost:27017/flipkart')
const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once('open',()=> console.log('server connected'))

app.use(express.json())

const product = require('./routes/productRoutes')
const category = require('./routes/categoryRoutes')
const brand = require('./routes/brandRoutes')
const blog = require('./routes/blogRoutes')
const image = require('./routes/imageRoutes')
const search = require('./routes/searchRoutes')

app.use('/get-brands',brand)
app.use('/get-categories',category)
app.use('/get-blogs',blog)
app.use('/get-products',product)
app.use('/get-images',image)
app.use('/search',search)




app.listen(8080,console.log('server started'))