import express from 'express';

const app = express();
const PORT = 3000;

const controller = (req, res) => {
    res.send("Bienvenue page d'accueil")
}

app.get('/', controller);

app.get('/about', (req, res) => {
    res.send("About");
})



app.listen(PORT, () => {
    console.log("Le serveur est en écoute sur le port " + PORT);
})