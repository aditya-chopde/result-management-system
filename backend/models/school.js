const mongoose = require("mongoose")

const schoolSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const School = mongoose.model("school", schoolSchema)

module.exports = School