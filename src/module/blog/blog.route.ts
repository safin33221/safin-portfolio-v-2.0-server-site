import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router()

router.post('/', blogController.createBlog)
router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getBlogById)
router.patch('/:id', blogController.updateBlog)
router.delete('/:id', blogController.deleteBlog)

export const BlogRoute = router