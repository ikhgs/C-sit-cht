const express = require('express');
const path = require('path');
const app = express();

// Dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Servir le fichier HTML à la route de base "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chatbot.html'));
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
