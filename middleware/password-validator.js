// Import des différents modules et déclaration de variable
const passwordValidator = require('password-validator');
const passwordShema = new passwordValidator();

// Création d'un schéma de password avec des critères à respecter
passwordShema
.is().min(8)
.is().max(70)
.has().uppercase(1)
.has().lowercase()
.has().digits(1)
.has().not().spaces()

// middleware de vérifaication de conformité du mot de passe
module.exports = (req, res, next) => {
    if(!passwordShema.validate(req.body.password)) {
        res.status(400).json({message : "Le mot de passe doit contenir entre 8 et 15 caractères, avec au moins une maj, une min et un chiffre !"});
    } else {
        next();
    }
};