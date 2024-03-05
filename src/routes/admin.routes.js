const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

//  "/admin"

router.get('/crear-producto', adminController.create); 
router.post('/crear-producto', adminController.store);
//
//
router.get('/editar-producto/:id/', adminController.edit); 
router.put('/editar-producto/:id', adminController.update); 
router.delete('/eliminar-producto/:id', adminController.destroy); 
//
//
module.exports = router;
