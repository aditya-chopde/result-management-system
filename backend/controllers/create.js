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

module.exports = {
    handleCreateSchool,
    handleCreateStudent,
}