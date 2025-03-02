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

const handleLoginSchool = async (req, res) => {
    try {
        const { schoolName, email, password } = req.body;
        const isExists = await School.findOne({ schoolName, email })
        if (isExists) {
            const hashedPassword = isExists.password;
            const isMatch = await bcrypt.compare(password, hashedPassword);
            if (isMatch) {
                const token = jwt.sign({ email, hashedPassword }, process.env.SECRET_KEY)
                return res.json({ success: true, message: "School Found", school: isExists, token })
            } else {
                return res.json({ success: false, message: "School Not Found" })
            }
        } else {
            return res.json({ success: false, message: "School Not Exists" })
        }
    } catch (err) {
        return res.json({ succes: false, message: "Error Occurred", error: err.message })
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

const handleDeleteStudent = async (req, res)=>{
    try {
        const {id} = req.params;
        const deleteStudent = await Student.findByIdAndDelete(id)
        return res.json({success: true, message: "Student Deleted Successfully", deletedStudent: deleteStudent})
    } catch (err) {
        return res.json({success: false, message: "Error Ocuurred", error: err.message})        
    }
}

const handleGetSingleSchool = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const getSingleSchool = await School.find({_id: id})
        return res.json({ success: true, message: "School fetched successfully", getSingleSchool })
    } catch (err) {
        return res.json({ success: false, message: "Error Occurred", error: err.message })
    }
}

const handleGetSingleStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const getSingleStudent = await Student.find({_id: id})
        return res.json({ success: true, message: "Student fetched successfully", getSingleStudent })
    } catch (err) {
        return res.json({ success: false, message: "Error Occurred", error: err.message })
    }
}

const handleSchoolEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const { schoolName, email, location, password } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const editSchool = await School.findByIdAndUpdate(id, {
            schoolName,
            email,
            location,
            password: hashedPassword,
        })

        return res.json({ success: true, message: "School Edited Successfully", editSchool })
    } catch (err) {
        return res.json({ success: false, message: "Error Occurred", error: err.message })
    }
}

const handleStudentEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const { studentName, studentRollNumber } = req.body;
        const editStudent = await Student.findByIdAndUpdate(id, {
            studentName,
            studentRollNumber,
        })

        return res.json({ success: true, message: "Student Edited Successfully", editStudent })
    } catch (err) {
        return res.json({ success: false, message: "Error Occurred", error: err.message })
    }
}

const getStudents = async (req, res) => {
    try {
        const { id } = req.params;
        const getStudents = await Student.find({studentOf: id})
        return res.json({success: true, message: "Fetched all Students", students: getStudents});
    } catch (err) {
        return res.json({success: false, message: "Error Occurred", error: err.message})
    }
}

module.exports = {
    handleCreateSchool,
    handleLoginSchool,
    handleCreateStudent,
    handleGetSingleSchool,
    handleGetSingleStudent,
    handleSchoolEdit,
    handleStudentEdit,
    getStudents,
    handleDeleteStudent,
}