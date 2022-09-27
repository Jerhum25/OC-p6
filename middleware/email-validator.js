const emailValidator = require('email-validator');

module.exports = (req, res, next) => {
    if(!emailValidator.validate(req.body.email)) {
        res.status(400).json({message : "Veuillez entrer un email correct !"});
    } else {
        next();
    }
    console.log(req.body.email);
}