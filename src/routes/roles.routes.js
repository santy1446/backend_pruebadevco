import { Router } from "express";
import { createNewRole, deleteRole, getRoles } from "../controllers/roles.controller";

const router = Router()

//Rutas para roles

router.get('/roles', getRoles)
router.post('/roles', createNewRole)
router.delete('/roles/:id', deleteRole)


export default router