const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateOneUser,
  createAdmiredPlayer,
} = require("./controller");

const router = express.Router();

router.route("/Users").get(getAllUsers);
router
  .route("/Users/:id")
  .get(getOneUser)
  .put(updateOneUser)
  .post(createAdmiredPlayer);
router.route("/Register").post(createUser);

module.exports = router;
