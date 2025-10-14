import { Router } from "express";
import { statController } from "./stat.controller";

const router = Router()
router.get("/", statController.getStat)
export const stateRoute = router