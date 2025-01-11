const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
    subjectName: {
        type: String, 
        required: true,
    },
    subjectTotalMarks: {
        type: String,
        required: true,
    },
    marksScored: {
        type: String,
        require: true,
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

module.exports = Result;