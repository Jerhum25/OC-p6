const passwordValidator = require('password-validator');
const passwordShema = new passwordValidator();

passwordShema
.is().min(8)
.is().max(70)
.has().uppercase(1)
.has().lowercase()
.has().digits(1)
.has().not().spaces()

module.exports = passwordShema;