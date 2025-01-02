import { Router } from 'express';
import * as usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/', usersController.getUsers);

export default router;