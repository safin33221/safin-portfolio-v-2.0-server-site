import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router()

router.post('/', blogController.createBlog)
router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getBlogById)

export const BlogRoute = router