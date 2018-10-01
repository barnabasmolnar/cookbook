const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: [String], required: true },
    prepTime: { type: Number, required: true },
    kcal: Number,
    tags: [String],
    images: [String],
    description: String,
    instructions: String,
    ingredients: {
        type: [{
            amount: String,
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient",
                required: true
            }
        }],
        required: true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isPublic: { type: Boolean, default: true, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Recipe", RecipeSchema);