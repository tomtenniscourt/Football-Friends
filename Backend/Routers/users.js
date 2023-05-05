const express = require("express")
const {
    getAllUsers,
    getOneUser,
    createUser

} = require("./controller")


const router = express.Router()

router.route("/Users").get(getAllUsers)
router.route("/Users/:id").get(getOneUser)
router.route("/Register").post(createUser)

module.exports = router