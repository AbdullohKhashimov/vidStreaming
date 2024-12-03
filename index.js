import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./src/routes/user-router.js";

const app = express();
dotenv.config();

const connection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use("/api/users", userRouter);

app.listen(8000, () => {
  connection();
  console.log("Connection successful");
});
