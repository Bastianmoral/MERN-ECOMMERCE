const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, default: "Esto es un ejemplo de descripción de cateogría"},
    image: {type: String, default: '/images/tablets-category.png'},
    attrs: [{key: {type: String}, value: [{type: String}]}],

});


const Category = mongoose.model("Category", categorySchema);

module.export = Category;