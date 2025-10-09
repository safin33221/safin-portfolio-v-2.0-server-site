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
const getAllProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await projectService.getAllProject();
        return res.status(201).json({
            success: true,
            message: "Project retrieve successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Project",
            error: error.message,
        });
    }
};
const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {
        const result = await projectService.deleteProject(Number(id));
        return res.status(201).json({
            success: true,
            message: "Project delete successfully",
            data: null,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Project",
            error: error.message,
        });
    }
};

const updateProject = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {
        const result = await projectService.updateProject(Number(id),req.body);
        return res.status(201).json({
            success: true,
            message: "Project Update successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to Update Project",
            error: error.message,
        });
    }
};



export const projectController = {
    uploadProject,
    getAllProject,
    deleteProject,
    updateProject
}