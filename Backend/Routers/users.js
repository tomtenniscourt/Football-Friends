const express = require("express")
const {
    getAllUsers,

} = require("./controller")


const router = express.Router()

router.route("/AllUsers").get(getAllUsers)

module.exports = router