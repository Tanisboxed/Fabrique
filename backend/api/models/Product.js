const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true , default: ''},
        description: { type: String, required: true, default: '' },
        rating: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
        category: { type: String, required: true, requried: true },
        dateCreated :{ type: Date, default: Date.now},
    }
)

module.exports = mongoose.model("Product", productSchema)