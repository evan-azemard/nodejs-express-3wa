import express from 'express';
import { requestLoggeer } from './midlewares/requestLogger.js';
import router from './routes/index.js';

// Initialisation
const app = express();
app.use(requestLoggeer)
app.use('/', router)
const PORT = 3000;

// const controller = (req, res) => {
//     res.send("Bienvenue page d'accueil")
// }

//! Midlewares
//     console.log('on passe par le midleware 1 et tout va bien');
//     next();
// }
// const midlleware2 = (req, res, next) => {
//     console.log('"On ne passe pas');
//     res.status(401).send('Interdit');
// }
// app.get('/', midlleware1, midlleware2, controller);

app.listen(PORT, () => {
    console.log("Le serveur est en écoute sur le port " + PORT);
})