import express, { raw } from "express";
import cors from "cors";
import dbconnect from "./models/dbconnect.js";
import { createUser } from "./controllers/userControllers.js";
import { signIn } from "./controllers/signInControllers.js";
import dotenv from "dotenv";
import User from "./models/usermodel.js";
import cookieParser from "cookie-parser";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
dotenv.config({
  path: "./env",
});
dbconnect();
// apis ==================================================================>
// CREATE USER
app.post("/api/v1/signup", createUser);
app.post("/api/v1/signin", signIn);

app.get("/", (req, res) => {
  res.send("nice");
});
app.listen(process.env.PORT, () =>
  console.log(`Server running at ${process.env.PORT}`)
);