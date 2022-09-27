const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const dotenv = require('dotenv').config({encoding: "latin1"});
const app = express();

// Connection a mongoDB
mongoose.connect(process.env.MONGOOSE_KEY,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});

const path = require('path');
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;