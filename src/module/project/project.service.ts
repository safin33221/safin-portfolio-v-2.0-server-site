import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db.config";

const uploadProject = async (payload: Prisma.ProjectCreateInput) => {
    const result = await prisma.project.create({
        data: payload
    })
    return result
}

export const projectService = {
    uploadProject
}