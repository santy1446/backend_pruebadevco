import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";

const router = Router()

//Emails

router.post('/sendemail', sendEmail)



export default router