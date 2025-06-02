import express from 'express';
import cors from "cors";
import router from './routes';
import { env } from './config/env';

// Initialisation
const app = express();
const { PORT, ORIGIN } = env;

app.use(cors({
    origin: ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}))

app.use(express.json()); // pour analyser les requetes JSON 

app.use('/', router);

app.listen(PORT, () => {
    console.log("Le serveur est en écoute sur le port " + PORT);
})