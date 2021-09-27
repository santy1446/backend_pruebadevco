import { Router } from "express";
import { createNewPhase1, deletePhase1, getPhase1 } from "../controllers/phase1.controller";

const router = Router()

//Rutas para Etapa 1

router.get('/phase1/:id', getPhase1)
router.post('/phase1', createNewPhase1)
router.delete('/phase1/:id', deletePhase1)


export default router