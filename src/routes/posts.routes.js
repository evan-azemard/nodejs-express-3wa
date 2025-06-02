"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_js_1 = require("../controllers/posts.controller.js");
const router = (0, express_1.Router)();
// GET http://localhost:3000/posts -> //! tout les posts
router.get('/', posts_controller_js_1.getAllPosts);
// GET http://localhost:3000/posts/:id -> //! récupérer un post
router.get('/:id', (req, res) => { });
// POST http://localhost:3000/posts -> //! créer un post
router.post('/', (req, res) => { });
// PUT http://localhost:3000/posts/:id -> //! mettre à jour un post
router.put('/:id', (req, res) => { });
// DELETE http://localhost:3000/posts/:id -> //! supprimer un post
router.delete('/:id', (req, res) => { });
exports.default = router;
