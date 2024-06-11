const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
    engMarks: {
        type: Number,
        required: true,
    },
    mathMarks: {
        type: Number,
        required: true,
    },
    sciMarks: {
        type: Number,
        required: true,
    },
    socailMarks: {
        type: Number,
        required: true,
    },
    marMarks: {
        type: Number,
        required: true,
    },
    resultOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "students",
        required: true,
    }
}, {
    timestamps: true
})

const Result = mongoose.model("result", resultSchema)

module.exports = resultSchema;