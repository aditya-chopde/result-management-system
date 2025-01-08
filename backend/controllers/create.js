const School = require("../models/school");
const Student = require("../models/student");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const handleCreateSchool = async (req, res) => {
    try {
        const { schoolName, email, location, password } = req.body;
        const isExists = await School.findOne({ schoolName, email, location })
        if (!isExists) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const createSchool = await School.create({
                schoolName,
                email,
                location,
                password: hashedPassword,
            })

            const token = jwt.sign({ email, hashedPassword }, process.env.SECRET_KEY)

            return res.json({ success: true, message: "School Created", createSchool, token })
        } else {
            return res.json({ success: false, message: "School Already Exists", School: isExists })
        }
    } catch (err) {
        res.send({ success: false, message: "Failed", error: err })
    }
}

const handleCreateStudent = async (req, res) => {
    try {
        const { studentName, studentRollNumber, studentOf } = req.body;
        const isExists = await Student.findOne({ studentName, studentRollNumber, studentOf })
        if (!isExists) {
            const createStudent = await Student.create({ studentName, studentRollNumber, studentOf })
            return res.json({ success: true, message: "Student Created", createStudent })
        } else {
            return res.json({ success: false, message: "Student Already Exists", Student: isExists })
        }
    } catch (err) {
        res.send({ success: false, message: "Failed", error: err })
    }
}

const handleGetSingleSchool = async (req, res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const getSingleSchool = await School.findById(id)
        return res.json({success: true, message: "School fetched successfully", getSingleSchool})
    } catch (err) {
        return res.json({success: false, message: "Error Occurred", error: err.message})
    }
}

const handleGetSingleStudent = async (req, res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const getSingleStudent = await Student.findById(id)
        return res.json({success: true, message: "Student fetched successfully", getSingleStudent})
    } catch (err) {
        return res.json({success: false, message: "Error Occurred", error: err.message})
    }
}

const handleSchoolEdit = async (req, res)=>{
    try {
        const {id} = req.params;
        const { schoolName, email, location, password } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const editSchool = await School.findByIdAndUpdate(id, {
            schoolName,
            email,
            location,
            password: hashedPassword,
        })

        return res.json({success: true, message: "School Edited Successfully", editSchool})
    } catch (err) {
        return res.json({success: false, message: "Error Occurred", error: err.message})
    }
}

const handleStudentEdit = async (req, res)=>{
    try {
        const {id} = req.params;
        const { studentName, studentRollNumber, studentOf } = req.body;
        const editStudent = await Student.findByIdAndUpdate(id, {
            studentName,
            studentRollNumber,
            studentOf,
        })

        return res.json({success: true, message: "Student Edited Successfully", editStudent})
    } catch (err) {
        return res.json({success: false, message: "Error Occurred", error: err.message})
    }
}

module.exports = {
    handleCreateSchool,
    handleCreateStudent,
    handleGetSingleSchool,
    handleGetSingleStudent,
    handleSchoolEdit,
    handleStudentEdit,
}