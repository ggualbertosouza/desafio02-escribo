import { Router } from "express";
import { signUp, signIn, userId } from "../app/controllers/userController.js";

const router = Router();

//Routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/getuser", userId);

export default router;