// Import du framework express et déclaration des variables
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const emailValidator = require('../middleware/email-validator');
const passwordValidator = require('../middleware/password-validator');

// Création des routes user
router.post('/signup', emailValidator, passwordValidator, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;