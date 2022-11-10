// Import des différents modules
const emailValidator = require('email-validator');

// middleware de vérifaication de conformité de l'adresse mail
module.exports = (req, res, next) => {
    if(!emailValidator.validate(req.body.email)) {
        res.status(400).json({message : "Veuillez entrer un email correct !"});
    } else {
        next();
    }
}