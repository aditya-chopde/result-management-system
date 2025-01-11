const express = require("express")
const { createResult } = require("../controllers/result")
const router = express()

router.post("/create", createResult)
router.get("/", async (req, res)=>{
    return res.json({message: "Working"})
})

module.exports = router;