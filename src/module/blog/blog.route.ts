import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router()

router.post('/', blogController.createBlog)

export const BlogRoute = router