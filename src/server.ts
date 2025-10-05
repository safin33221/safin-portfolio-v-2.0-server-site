import http, { Server } from "http";
import { prisma } from "./config/db.config";
import app from "./app";
import dotenv from 'dotenv'
dotenv.config()
let server: Server

async function connectToDB() {
    try {
        await prisma.$connect()
        console.log("DB connection successfully");
    } catch (error) {
        console.log("DB connection failed");
        process.exit(1)
    }

}
const startServer = async () => {
    try {
        await connectToDB()
        server = http.createServer(app)

        server.listen(process.env.PORT, () => {
            console.log(`🚀 Server is running on port ${process.env.PORT}}`);
        })
    } catch (error) {
        console.error("❌ Error during server startup:", error);
        process.exit(1);
    }
}


startServer()