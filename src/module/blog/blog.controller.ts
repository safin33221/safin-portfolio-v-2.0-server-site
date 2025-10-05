import { NextFunction, Request, Response } from "express";
import { blogService } from "./blog.service";

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await blogService.createBlog(req.body)
        return res.status(200).json({
            success: false,
            message: "Blog Create Successful",
            data: result

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Blog Create Successful failed",
            data: error.message

        })
    }
}
const getAllBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await blogService.getAllBlog()
        return res.status(200).json({
            success: false,
            message: "Blog retrieved Successful",
            data: result

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Blog get  failed",
            data: error.message

        })
    }
}
const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await blogService.getBlogById(Number(id))
        return res.status(200).json({
            success: false,
            message: "Blog retrieved Successful",
            data: result

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Blog get  failed",
            data: error.message

        })
    }
}
const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await blogService.updateBlog(Number(id), req.body)
        return res.status(200).json({
            success: true,
            message: "Blog Update successful Successful",
            data: result

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Blog update  failed",
            data: error.message

        })
    }
}
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await blogService.deleteBlog(Number(id))
        return res.status(200).json({
            success: true,
            message: "Blog deleted successful Successful",
            data: result

        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Blog deleted  failed",
            data: error.message

        })
    }
}

export const blogController = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}