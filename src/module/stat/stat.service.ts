import { prisma } from "../../config/db.config"

const getState = async () => {
    const totalBlog = await prisma.blog.count()
    const totalProject = await prisma.project.count()

    const totalBlogView = await prisma.blog.aggregate({
        _sum: {
            views: true
        }
    })
    return {
        totalBlog,
        totalProject,
        totalBlogView: totalBlogView._sum.views
    }
}

export const stateService = {
    getState
}