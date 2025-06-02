"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controller_1 = require("../controllers/comments.controller");
const router = (0, express_1.Router)();
// Récupérer toute les routes
router.get("/", comments_controller_1.getAllComments);
// Récupérer une route
router.get("/:id", (req, res) => {});
// Créer un commentaire
router.post("/", (req, res) => {});
// Mettre à jour un commentaire
router.put("/:id", (req, res) => {});
// Supprimer un commentaire
router.delete("/:id", (req, res) => {});
exports.default = router;
