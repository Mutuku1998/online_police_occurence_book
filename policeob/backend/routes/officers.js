const express = require('express')

const {updateOfficer, deleteOfficer,getAllofficers, getSingleofficer,} = require('../controllers/officersController')

const router = express.Router()

router.get("/:id", getSingleofficer);
router.get("/",  getAllofficers);
router.put("/:id", updateOfficer);
router.delete("/:id",  deleteOfficer);


module.exports = router