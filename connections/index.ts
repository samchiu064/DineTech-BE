import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    "DATABASE and DATABASE_PASSWORD environment variables are required"
  );
}

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("connect success"))
  .catch((err) => console.log(err));
