const connectDB = require("../config/db")

connectDB()


const categoryData = require("./categories")
const Category = require("../models/categoryModel")

const importData = async () =>  {
    try {
        //await Category.collection.dropIndexes() asi se borran los indices que ya estén agregados. 
        await Category.collection.deleteMany({})
        await Category.insertMany(categoryData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch(error) {    
        console.log("Error while proccessing seeder data", error)
        process.exit(1);
    }
}

importData()

