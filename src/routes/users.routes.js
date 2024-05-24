import {Router} from 'express';

import {actualizaUser, createUser, deleteUser, getUser, getUsers} from '../controllers/user.controllers.js';

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users/', createUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', actualizaUser);

export default router;