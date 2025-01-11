const express = require("express")
const { createResult, getAllSubject } = require("../controllers/result")
const router = express()

router.post("/create", createResult)
router.get("/get/:id", getAllSubject)

module.exports = router;