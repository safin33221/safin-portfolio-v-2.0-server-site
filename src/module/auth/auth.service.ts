import { prisma } from "../../config/db.config"
import bcrypt from "bcryptjs";
const login = async (payload: { email: string, password: string }) => {
    const user = await prisma.user.findUnique({
        where: { email: payload.email }
    })
    if (!user) {
        throw new Error("User not found")
    }

    const isCorrectPassword = await bcrypt.compare(payload.password, user.password)
    if (!isCorrectPassword) {
        throw new Error("Invalid password")
    }
    return user
}

export const authService = {
    login
}