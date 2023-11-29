const connectDB = require("../config/db")

connectDB()


const categoryData = require("./categories")
const productData = require("./products")
const reviewData = require("./reviews")


const Category = require("../models/categoryModel")
const Product = require("../models/ProductModel")
const Review= require("../models/reviewsModel")


const importData = async () =>  {
    try {
        await Category.collection.dropIndexes() //asi se borran los indices que ya estén agregados. 
        await Product.collection.dropIndexes() //asi se borran los indices que ya estén agregados. 
       
        
        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        
        await Category.insertMany(categoryData)
        await Product.insertMany(productData)
        await Review.insertMany(reviewData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch(error) {    
        console.log("Error while proccessing seeder data", error)
        process.exit(1);
    }
}

importData()

