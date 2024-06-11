const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    studentRollNumber: {
        type: String,
        required: true,
    },
    studentOf:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "schools",
        required: true
    }
}, {
    timestamps: true,
})

const Student = mongoose.model("student", studentSchema)

module.exports = Student;