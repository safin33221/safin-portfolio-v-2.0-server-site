
import bcrypt from "bcryptjs";
import { prisma } from "../config/db.config"


export const seedAdmin = async () => {
    const isAdminExist = await prisma.user.findUnique({
        where: { email: process.env.ADMIN_EMAIL }
    })

    if (isAdminExist) {
        return console.log("Admin user already exists");

    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD as string, 10)
    const admin = await prisma.user.create({
        data: {
            name: process.env.ADMIN_NAME as string,
            email: process.env.ADMIN_EMAIL as string,
            password: hashedPassword as string,
            avatar: process.env.ADMIN_AVATAR,
            bio: process.env.ADMIN_BIO,
            role: "admin",
        },
    })

    return admin

}