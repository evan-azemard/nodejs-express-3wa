import { Router } from "express";
import postRouter from './posts.routes.js';
import commentRouter from './comments.routes.js'
const router = Router();

// http://localhost:3000/posts
router.use('/posts', postRouter);


// http://localhost:3000/users


// http://localhost:3000/comments
router.use('/comments', commentRouter )


export default router;

// SERVER - > ROUTER (ce fichier) -> ROUTES (/users, /posts,...) -> CONTROLLER -> MODELS