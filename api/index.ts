import type { Request, Response } from "express";
import app from "../src/app";
import { prisma } from "../src/config/db.config";
import { seedAdmin } from "../src/utils/seedAdmin";

let isInitialized = false;

const shouldSeedAdmin = () =>
  Boolean(
    process.env.ADMIN_EMAIL &&
      process.env.ADMIN_PASSWORD &&
      process.env.ADMIN_NAME
  );

const initialize = async () => {
  if (isInitialized) return;

  await prisma.$connect();

  if (shouldSeedAdmin()) {
    await seedAdmin();
  }

  isInitialized = true;
};

export default async function handler(req: Request, res: Response) {
  await initialize();
  return app(req, res);
}
