// Import des différents modules
const mongoose = require('mongoose');

// Création d'un schéma de sauce
const sauceShema = mongoose.Schema({

    name: { type: String, required: true },
    manufacturer:{ type : String, required: true},
    mainPepper:{ type : String, required: true},
    heat:{ type : Number, required: true},
    likes:{ type : Number, default: 0 },
    dislikes:{ type : Number, default: 0 },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    usersLiked: [{ type: String }],
    usersDisliked: [{ type: String }],

});

// Export du modèle
module.exports = mongoose.model('Sauce', sauceShema);