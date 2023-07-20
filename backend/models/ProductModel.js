const mongoose = require('mongoose')
const Review = require("./reviewsModel")
const imageSchema = mongoose.Schema({
    path: {type: String, required: true}
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
    }, 
    description: {
        type: String, 
        required: true,

    },
    category: {
        type: String, 
        required: true,
        
    },
    count: {
        type: Number, 
        required: true,
    },    
    price: {
        type: Number, 
        required: true,
        
    },
    rating: {
        type: Number, 
        required: true,
        
    },
    reviewsNumber: {
        type: Number, 
    },
    sales: {
        type: Number, 
        default: 0
    }, 
    attrs: [
        // attributes of the products like color and size etc.. 
        {key: {type: String}, value: {type: String}}
    ],
    images: [imageSchema],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Review,
        }
    ]
}, {
    timestamps : true,
})

productSchema.index()

const Product = mongoose.model('Product', productSchema)

module.exports = Product