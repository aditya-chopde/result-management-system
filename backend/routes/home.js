const expresss = require("express")
const { handleHome } = require("../controllers/home")
const router = expresss.Router()

router.get("/", handleHome)

module.exports = router