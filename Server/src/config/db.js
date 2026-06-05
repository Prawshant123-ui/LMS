const prisma = require("./prisma");

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected!!!");
  } catch (error) {
    console.log("Database not connected!!!", error);
    process.exit(1);
  }
};

module.exports = connectDB;