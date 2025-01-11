const express = require("express")
const { handleCreateSchool, handleCreateStudent, handleGetSingleSchool, handleGetSingleStudent, handleSchoolEdit, handleStudentEdit, handleLoginSchool, getStudents, handleDeleteStudent } = require("../controllers/create")
const router = express.Router()

router.post("/school", handleCreateSchool)
router.post("/school/login", handleLoginSchool)
router.post("/student", handleCreateStudent)
router.get("/get-single-student/:id", handleGetSingleStudent)
router.get("/get-single-school/:id", handleGetSingleSchool)
router.post("/edit-school/:id", handleSchoolEdit);
router.post("/edit-student/:id", handleStudentEdit)
router.get("/students/all/:id", getStudents)
router.post("/student/delete/:id", handleDeleteStudent)

module.exports = router;