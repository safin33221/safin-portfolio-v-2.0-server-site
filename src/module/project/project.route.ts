import { Router } from "express";
import { projectController } from "./project.controller";

const router = Router()
router.post("/", projectController.uploadProject)
router.get("/", projectController.getAllProject)
router.delete("/:id", projectController.deleteProject)
router.patch("/:id", projectController.updateProject)

export const ProjectRouter = router