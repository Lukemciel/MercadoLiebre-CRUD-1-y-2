const express = require('express');
const router = express.Router();

const mainController = require('../controllers/others');

// "/"
router.get("/", (req, res) => res.redirect("/home"))
router.get('/home', mainController.home); 
router.get('/buscar', mainController.search); 

module.exports = router;
