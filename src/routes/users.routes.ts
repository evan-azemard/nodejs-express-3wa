import { Router } from 'express';
import controller from "../controllers/users.controller";

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', (req, res) => { });

router.post('/', (req, res) => { });

router.put('/:id', (req, res) => { });

router.delete('/:id', (req, res) => { });

export default router;