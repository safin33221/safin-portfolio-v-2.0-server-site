import { NextFunction, Request, Response } from "express";
import { blogService } from "./blog.service";

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogService.createBlog(req.body);
    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message,
    });
  }
};

const getAllBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogService.getAllBlog();
    return res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve blogs",
      error: error.message,
    });
  }
};

const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const result = await blogService.getBlogById(id);
    return res.status(200).json({
      success: true,
      message: "Blog retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve blog",
      error: error.message,
    });
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const result = await blogService.updateBlog(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const result = await blogService.deleteBlog(id);
    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete blog",
      error: error.message,
    });
  }
};

export const blogController = {
  createBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
