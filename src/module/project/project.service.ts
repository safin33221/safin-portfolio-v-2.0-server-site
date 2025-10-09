import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db.config";

const uploadProject = async (payload: Prisma.ProjectCreateInput) => {
    const result = await prisma.project.create({
        data: payload
    })
    return result
}


const getAllProject = async () => {
    const result = await prisma.project.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return result
}
const deleteProject = async (id: number) => {
    const result = await prisma.project.delete({
        where: {
            id: id
        }
    })
    return result
}

export const projectService = {
    uploadProject,
    getAllProject,
    deleteProject
}