import { NextFunction, Request, Response } from "express";
import { projectService } from "./project.service";

const uploadProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await projectService.uploadProject(req.body);
        return res.status(201).json({
            success: true,
            message: "Project Uploaded successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create Project",
            error: error.message,
        });
    }
};

export const projectController = {
    uploadProject
}