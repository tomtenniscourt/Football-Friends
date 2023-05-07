const express = require("express");
const router = express.Router();
const upload = require("../Utilities/upload");
const sharp = require("sharp");
const User = require("../Models/user");
const profilePictureUpload = async (req, res) => {
  try {
    // Resizing the user uploaded file
    // Multer automatically generates file.path upon upload
    const resizedImage = await sharp(req.file.path)
      .resize(250, 250, { fit: "cover" })
      .toBuffer();
    // Save resized umage, remove original
    await sharp(resizedImage).toFile(req.file.path);
    // will this have to have authentication involved? EG web token validation etc
    const user = await User.findById("6457cbe8fd85550788db11f1");
    if (user) {
      // update key with path of pic
      user.profilePicturePath = req.file.path;
      await user.save();
    } else {
      throw new Error("User not found");
    }
    // response to client
    res.status(200).send({ imagePath: req.file.path });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Error uploading the profile picture." });
  }
};
router
  .route("/uploadProfilePicture")
  .post(upload.single("profilePicture"), profilePictureUpload);
module.exports = router;

// router.post("/uploadProfilePicture", upload.single("profilePicture"), async (req,res) => {
//     try {
//         // Resizing the user uploaded file
//         // Multer automatically generates file.path upon upload
//         const resizedImage = await sharp(req.file.path)
//         .resize(250, 250, {fit: "cover"})
//         .toBuffer()

//         // Save resized umage, remove original
//         await sharp(resizedImage).toFile(req.file.path);

//         // will this have to have authentication involved? EG web token validation etc
//             const user = await User.findById(userId)
//             if (user) {
//                 // update key with path of pic
//                 user.profilePicturePath = req.file.path;
//                 await user.save();
//             } else {
//                 throw new Error("User not found")
//             }
//             // response to client
//             res.status(200).send({imagePath: req.file.path})
//     } catch (error) {
//         console.error(error);
//     res.status(400).send({ error: 'Error uploading the profile picture.' });
//     }
// })
