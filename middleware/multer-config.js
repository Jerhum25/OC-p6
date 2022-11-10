// Import des différents modules
const multer = require('multer');

// Types de fichiers acceptés
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif' : 'gif'
};

// Configuration du chemin et du nom de fichier entrant
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        const nameEdit = name.split("." + extension).join("")
        callback(null, nameEdit + Date.now() + '.' + extension);
    }
});

// Enregistre le fichier dans le dossier image
module.exports = multer({storage: storage}).single('image');