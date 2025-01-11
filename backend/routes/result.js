const express = require("express")
const { createResult, getAllSubject, handleSubjectDelete } = require("../controllers/result")
const router = express()

router.post("/create", createResult)
router.get("/get/:id", getAllSubject)
router.post("/delete/:id", handleSubjectDelete)

module.exports = router;