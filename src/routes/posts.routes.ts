import { Router } from 'express';
import controller from '../controllers/posts.controller';

const router = Router();

// GET http://localhost:3000/posts -> //! tout les posts
router.get('/',  controller.getAll);

// GET http://localhost:3000/posts/:id -> //! récupérer un post
router.get('/:id', (req, res) => {});

// POST http://localhost:3000/posts -> //! créer un post
router.post('/', (req, res) => {});

// PUT http://localhost:3000/posts/:id -> //! mettre à jour un post
router.put('/:id', (req, res) => {});

// DELETE http://localhost:3000/posts/:id -> //! supprimer un post
router.delete('/:id', (req, res) => {});

export default router;


