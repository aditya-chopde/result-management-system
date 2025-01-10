const express = require("express")
const { handleCreateSchool, handleCreateStudent, handleGetSingleSchool, handleGetSingleStudent, handleSchoolEdit, handleStudentEdit, handleLoginSchool } = require("../controllers/create")
const router = express.Router()

router.post("/school", handleCreateSchool)
router.post("/school/login", handleLoginSchool)
router.post("/student", handleCreateStudent)
router.get("/get-single-student/:id", handleGetSingleStudent)
router.get("/get-single-school/:id", handleGetSingleSchool)
router.post("/edit-school/:id", handleSchoolEdit);
router.post("/edit-student/:id", handleStudentEdit)

module.exports = router;