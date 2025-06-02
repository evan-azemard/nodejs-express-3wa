import express from 'express';
import { requestLoggeer } from './midlewares/requestLogger.js';

const app = express();
app.use(requestLoggeer)
const PORT = 3000;

const controller = (req, res) => {
    res.send("Bienvenue page d'accueil")
}

//! Midlewares
const midlleware1 = (req, res, next) => {
    console.log('on passe par le midleware 1 et tout va bien');
    next();
}

const midlleware2 = (req, res, next) => {
    console.log('"On ne passe pas');
    res.status(401).send('Interdit');
}


//! Routes
app.get('/', midlleware1, midlleware2, controller);

app.get('/about', (req, res) => {
    res.send("A propos de MOI");
})

app.listen(PORT, () => {
    console.log("Le serveur est en écoute sur le port " + PORT);
})