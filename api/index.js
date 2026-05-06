const app = require("../dist/app").default;
const { prisma } = require("../dist/config/db.config");
const { seedAdmin } = require("../dist/utils/seedAdmin");

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

module.exports = async function handler(req, res) {
  await initialize();
  return app(req, res);
};
