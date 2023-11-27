const connectDB = require("../config/db")

connectDB()


const categoryData = require("./categories")
const Category = require("../models/categoryModel")

const importData = async () =>  {
    try {
        await Category.collection.deleteMany({})
        await Category.insertMany(cateogryData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch(error) {    
        console.log("Error while proccessing seeder data", error)
    }
}

