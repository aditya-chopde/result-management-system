const School = require("../models/school");

const handleCreateSchool = async (req, res) => {
    try {
        const body = req.body;
        const createSchool = await School.create({
            schoolName: body.schoolName,
            email: body.email,
            location: body.location,
            password: body.password,
        })

        res.send({ status: "Success", createSchool })
    } catch (err) {
        res.send({ status: "Failed", error: err })
    }
}

module.exports = {
    handleCreateSchool,
}