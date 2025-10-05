import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router()

router.post('/', blogController.createBlog)
router.get('/', blogController.getAllBlog)

export const BlogRoute = router