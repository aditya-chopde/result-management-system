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

module.exports = {
    createResult,
}