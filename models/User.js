// Import des différents modules
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Création d'un schéma utilisateur
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Utilisation du plugin mongoose unique validator pour ne pas créer plusieurs comptes avec le même email
userSchema.plugin(uniqueValidator);

// Export du modèle
module.exports = mongoose.model('User-piiquante', userSchema);