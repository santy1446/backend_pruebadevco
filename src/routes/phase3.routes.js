import { Router } from "express";
import { createNewPhase3, deletePhase3, getPhase3 } from "../controllers/phase3.controller";

const router = Router()

//Rutas para Etapa 3

router.get('/phase3/:id', getPhase3)
router.post('/phase3', createNewPhase3)
router.delete('/phase3/:id', deletePhase3)


export default router