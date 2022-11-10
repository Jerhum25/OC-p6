// Import du framework express et déclaration des variables
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

// Création des routes sauce
router.get('/', sauceCtrl.getAllSauces);
router.post('/', multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, multer, sauceCtrl.likeSauce);

module.exports = router;