import http, { Server } from "http";
import app from "./app";
import { prisma } from "./config/db.config";
import { seedAdmin } from "./utils/seedAdmin";

let server: Server;

const shouldSeedAdmin = () =>
  Boolean(
    process.env.ADMIN_EMAIL &&
      process.env.ADMIN_PASSWORD &&
      process.env.ADMIN_NAME
  );

async function connectToDB() {
  try {
    await prisma.$connect();
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
}

const startServer = async () => {
  try {
    await connectToDB();

    if (shouldSeedAdmin()) {
      await seedAdmin();
    }

    server = http.createServer(app);

    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error during server startup:", error);
    process.exit(1);
  }
};

startServer();
