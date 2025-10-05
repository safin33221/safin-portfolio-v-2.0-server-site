import { Blog, Prisma } from "@prisma/client"
import { prisma } from "../../config/db.config"

const createBlog = async (payload: Prisma.BlogCreateInput):Promise<Blog> => {
    const res = await prisma.blog.create({
        data: payload
    })
    return res
}


export const blogService = {
    createBlog
}