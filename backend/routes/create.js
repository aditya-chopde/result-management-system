const express = require("express")
const { handleCreateSchool, handleCreateStudent } = require("../controllers/create")
const router = express.Router()

router.post("/school", handleCreateSchool)
router.post("/student", handleCreateStudent)

module.exports = router;