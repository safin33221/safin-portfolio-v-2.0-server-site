import { Blog, Prisma } from "@prisma/client"
import { prisma } from "../../config/db.config"

const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
    const res = await prisma.blog.create({
        data: payload
    })
    return res
}

const getAllBlog = async () => {
    const res = await prisma.blog.findMany()
    return res
}
const getBlogById = async (id: number) => {
    return await prisma.$transaction(async (tx) => {
        await tx.blog.update({
            where: { id },
            data: {
                views: {
                    increment: 1
                }
            }
        })
        const res = await tx.blog.findUnique({
            where: { id }
        })
        return res
    })
}


export const blogService = {
    createBlog,
    getAllBlog,
    getBlogById
}