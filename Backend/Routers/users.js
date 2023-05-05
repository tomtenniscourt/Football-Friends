const express = require("express")
const {
    getAllUsers,
    getOneUser,

} = require("./controller")


const router = express.Router()

router.route("/Users").get(getAllUsers)
router.route("/Users/:id").get(getOneUser)

module.exports = router