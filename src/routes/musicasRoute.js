const express = require("express");
const router = express.Router();
const getAllMusicasController = require("../controllers/musicasController.js");


router.get("/", getAllMusicasController.getAllMusicas);

module.exports = router;
