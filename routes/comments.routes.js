import { Router } from "express";
import { getAllComments } from "../controllers/comments.controller.js";
const router = Router();


// Récupérer toute les routes
router.get('/', getAllComments);

// Récupérer une route
router.get('/:id', (req, res) => {});

// Créer un commentaire
router.post('/', (req, res) => {});

// Mettre à jour un commentaire
router.put('/:id', (req,res) => {});

// Supprimer un commentaire
router.delete('/:id', (req,res) => {});

export default router;