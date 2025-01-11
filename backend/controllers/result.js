const Result = require("../models/result");

const createResult = async (req, res)=>{
    try {
        const {subjectName, subjectTotalMarks, marksScored, resultOf} = req.body;
        const setResult = await Result.create({
            subjectName,
            subjectTotalMarks,
            marksScored,
            resultOf,
        })
        return res.json({success: true, message: "Result Added", result: setResult})
    } catch (error) {
        return res.json({success: false, message: "Error Occurred", error: error.message})        
    }
}

const getAllSubject = async (req, res)=>{
    try {
        const {id} = req.params;
        const getSubject = await Result.find({resultOf: id});
        return res.json({success: true, message: "Data Fetched", subjects: getSubject});
    } catch (error) {
        return res.json({success: false, message: "Error Ocurred", error: error.message})
    }
}

const handleSubjectDelete = async (req, res)=>{
    try {
        const {id} = req.params;
        const deleteData = await Result.findByIdAndDelete(id)
        return res.json({success: true, message: "Data Deleted", deleteData: deleteData})
    } catch (error) {
        return res.json({success: false, message: "Error Ocuured", error: error.message})
    }
}

module.exports = {
    createResult,
    getAllSubject,
    handleSubjectDelete,
}