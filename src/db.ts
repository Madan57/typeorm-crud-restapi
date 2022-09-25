import { AppDataSource } from "./data-source";

export async function initializeDB() {
  console.log("init.....");
  try {
    console.log("Initializing DB connection ");
    await AppDataSource.initialize();
    console.log("DB connection successful!!!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}
