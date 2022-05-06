const mongoose = require("mongoose")
const RecipeModel = require("./models/Recipe.model.js")
let recipeArr = require("./recipes.json")

mongoose.connect("mongodb://localhost:27017/recipe-model")


.then((response) => {
    console.log("no incluir recetas cocinadas")
    return RecipeModel.deleteMany() 
})


.then((response) => {
    return RecipeModel.create({
        title: "Paella",
        level: "UltraPro Chef",
        ingredients: ["Arroz", "Pimiento", "Conejo", "Caracoles", "Sofrito"],
        cuisine: "Mediterranea",
        dishType: "main_course",
        image: "https://i1.wp.com/aliolitoursalicante.com/wp-content/uploads/2016/11/arroz-con-conejo-destacada.jpg?fit=780%2C520&ssl=1",
        duration: 120,
        creator: "PolMadede"
    })
    })


.then((response) => {
    console.log("la paella ha sido cocinada")

    return RecipeModel.insertMany(recipeArr)
})

.then((response) => {
    console.log("nuevas recetas han sido cocinadas")
    return RecipeModel.findOneAndUpdate({name: "pasta"}, {duration: 100}, {new: true})
})

.then((response) => {
    console.log("cambio de duracion")
    return RecipeModel.deleteOne({name: "Burrito" })
})
.then((response) => {
    console.log("eliminamos burrito, no le gusta a Pablo")
})


.catch((err) => {
    console.log(err)
})

mongoose.connection.close();