const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require("./routes/apiRoutes")

app.get('/', async (req, res, next) => {
    const Product = require("./models/ProductModels")
    try {
        const product = new Product
        product.name = "New product name"
        const productSaved = await product.save()
        console.log(productSaved === product)
        const products = await Product.find()
        console.log(products.length)
        res.send('Product created' + product._id)
    } catch(err) {
        next(err)
    }
    //res.json({message: "API running..."})
})

// MONGODB CONNECTION 
const connectDB = require("./config/db");
connectDB();


app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

