const connectDB = require("../config/db")

connectDB()


const categoryData = require("./categories")
const productData = require("./products")
const reviewData = require("./reviews")
const userData = require("./users")
const orderData = require("./orders")


const Category = require("../models/categoryModel")
const Product = require("../models/ProductModel")
const Review = require("../models/reviewsModel")
const User = require("../models/UserModel")
const Order = require("../models/OrderModel")


const importData = async () =>  {
    try {
        await Category.collection.dropIndexes() //asi se borran los indices que ya estén agregados. 
        await Product.collection.dropIndexes() //asi se borran los indices que ya estén agregados. 
       
        
        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})
        
        await Category.insertMany(categoryData)
        const reviews = await Review.insertMany(reviewData)
        const sampleProducts = productData.map((product) => {
            reviews.map((review) => {
                product.reviews.push(review._id)
            })
            return {...product}
        })

        await Product.insertMany(sampleProducts)
        await User.insertMany(userData)
        await Order.insertMany(orderData)

        
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch(error) {    
        console.log("Error while proccessing seeder data", error)
        process.exit(1);
    }
}

importData()

