import { Router } from "express";
import { createNewPhase2, deletePhase2, getPhase2 } from "../controllers/phase2.controller";

const router = Router()

//Rutas para Etapa 2

router.get('/phase2/:id', getPhase2)
router.post('/phase2', createNewPhase2)
router.delete('/phase2/:id', deletePhase2)


export default router