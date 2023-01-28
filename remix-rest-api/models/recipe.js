const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    info: {
        required: true,
        type: Object
    },
    ingredients: {
        required: true,
        type: Array
    },
    tags: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)