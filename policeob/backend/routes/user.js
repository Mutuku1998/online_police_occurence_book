const express = require('express')

const {updateUser, deleteUser,getAllusers, getSingleuser,getUserProfile} = require('../controllers/userController')

const router = express.Router()

router.get("/:id", getSingleuser);
router.get("/",  getAllusers);
router.put("/:id", updateUser);
router.delete("/:id",  deleteUser);
router.get("/profile/me",  getUserProfile);

module.exports = router