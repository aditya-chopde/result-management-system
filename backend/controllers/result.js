const Result = require("../models/result");
const School = require("../models/school")
const Student = require("../models/student")

const createResult = async (req, res) => {
    try {
        const { subjectName, subjectTotalMarks, marksScored, resultOf } = req.body;
        const setResult = await Result.create({
            subjectName,
            subjectTotalMarks,
            marksScored,
            resultOf,
        })
        return res.json({ success: true, message: "Result Added", result: setResult })
    } catch (error) {
        return res.json({ success: false, message: "Error Occurred", error: error.message })
    }
}

const getAllSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const getSubject = await Result.find({ resultOf: id });
        return res.json({ success: true, message: "Data Fetched", subjects: getSubject });
    } catch (error) {
        return res.json({ success: false, message: "Error Ocurred", error: error.message })
    }
}

const handleSubjectDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteData = await Result.findByIdAndDelete(id)
        return res.json({ success: true, message: "Data Deleted", deleteData: deleteData })
    } catch (error) {
        return res.json({ success: false, message: "Error Ocuured", error: error.message })
    }
}

const handleSeeResult = async (req, res) => {
    try {
        const { schoolName, studentName, studentRollNumber } = req.body;
        
        // Check if school exists
        const findSchool = await School.findOne({ schoolName });
        if (!findSchool) {
            return res.json({ success: false, message: "School not found" });
        }

        // Check if student exists
        const findStudent = await Student.findOne({ 
            studentName, 
            studentRollNumber,
            studentOf: findSchool._id // Ensure student belongs to the school
        });
        
        if (!findStudent) {
            return res.json({ success: false, message: "Student not found" });
        }
        const findResult = await Result.find({ resultOf: findStudent._id });
        
        return res.json({ 
            success: true, 
            message: "Data Fetched", 
            school: findSchool, 
            student: findStudent, 
            results: findResult,
            studentId: findStudent._id 
        });
    } catch (error) {
        return res.json({ 
            success: false, 
            message: "Error Occurred", 
            error: error.message 
        });
    }
}

module.exports = {
    createResult,
    getAllSubject,
    handleSubjectDelete,
    handleSeeResult,
}