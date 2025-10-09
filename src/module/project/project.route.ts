import { Router } from "express";
import { projectController } from "./project.controller";

const router = Router()
router.post("/", projectController.uploadProject)
router.get("/", projectController.getAllProject)

export const ProjectRouter = router