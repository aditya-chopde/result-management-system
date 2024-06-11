const express = require("express")
const { handleCreateSchool } = require("../controllers/create")
const router = express.Router()

router.post("/school", handleCreateSchool)

module.exports = router;