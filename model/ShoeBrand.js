const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shoeBrandSchema = new Schema ({
    brand: {
        type: String,
        required: true
    },
    founded: {
        type: Number,
        required: true
    },
    isActivelyProduced: {
        type: Boolean,
        default: true
    },
    // modelImage: {
    //     type: Image,
    //     required: true
    // }
},

{timestamps: true})

const ShoeBrand = mongoose.model("ShoeBrand", shoeBrandSchema)

module.exports = ShoeBrand;