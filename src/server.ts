import http, { Server } from "http";
import { prisma } from "./config/db.config";
import app from "./app";

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

        server.listen(5000, () => {
            console.log(`🚀 Server is running on port 5000}`);
        })
    } catch (error) {
        console.error("❌ Error during server startup:", error);
        process.exit(1);
    }
}


startServer()