import { Router } from "express";
import controller from "../controllers/comments.controller";

const router = Router();


// Récupérer toute les routes
router.get('/', controller.getAll);

// Récupérer une route
router.get('/:id', (req, res) => {});

// Créer un commentaire
router.post('/', (req, res) => {});

// Mettre à jour un commentaire
router.put('/:id', (req,res) => {});

// Supprimer un commentaire
router.delete('/:id', (req,res) => {});

export default router;