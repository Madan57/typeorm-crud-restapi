// import "reflect-metadata";
import app from "./app";
import * as dotenv from "dotenv";
import { initializeDB } from "./db";

async function main() {
  try {
    await initializeDB();
    app.listen(process.env.PORT);
    console.log(`Server running on port ${process.env.PORT}...`);
  } catch (error) {
    console.log(error);
  }
}

main();
