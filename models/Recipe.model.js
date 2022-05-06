const mongoose = require("mongoose");

//* Crear el Schema

let recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    level: {
        type: String,
        enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
    },
    ingredients: {
        type: [String]
    },
    cuisine: {
        type: String,
        required: true,
    },
    dishType: {
        type: String,
        enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
    },
    image: {
        type: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg", 
    },
    duration: {
        type: Number,
        min: 0, 
    },
    creator: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.today
    }
})


let RecipeModel = mongoose.model("recipe", recipeSchema)

module.exports = RecipeModel