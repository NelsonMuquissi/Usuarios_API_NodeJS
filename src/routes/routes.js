import {Router} from 'express'
import UsuarioController from '../app/controller/UsuarioController.js';

const router = Router()

router.get('/usuario', UsuarioController.show)

router.get("/usuario/:id", UsuarioController.findId);

router.post("/usuario", UsuarioController.store);

router.put("/usuario", UsuarioController.update);

router.delete("/usuario/:id", UsuarioController.delete);

export default router
