const express = require("express")
const { createResult, getAllSubject, handleSubjectDelete, handleSeeResult } = require("../controllers/result")
const router = express()

router.post("/create", createResult)
router.get("/get/:id", getAllSubject)
router.post("/delete/:id", handleSubjectDelete)
router.post("/watch", handleSeeResult)

module.exports = router;