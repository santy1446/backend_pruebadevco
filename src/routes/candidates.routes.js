import { Router } from "express";
import { createNewCandidate, deleteCandidate, getCandidates, updateCandidatePhase, updateCandidate } from "../controllers/candidates.controller";

const router = Router()

//Rutas para candidatos

router.get('/candidates', getCandidates)
router.post('/candidates', createNewCandidate)
router.delete('/candidates/:id', deleteCandidate)
router.put('/candidates/:id', updateCandidate)
router.put('/candidates_phase/:id', updateCandidatePhase)



export default router