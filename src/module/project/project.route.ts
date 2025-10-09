import { Router } from "express";
import { projectController } from "./project.controller";

const router = Router()
router.post("/", projectController.uploadProject)

export const ProjectRouter = router