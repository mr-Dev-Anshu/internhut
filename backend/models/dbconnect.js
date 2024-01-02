import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbconnect = () =>
  mongoose
    .connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log("error while connecting the DB !" + error);
    });

export default dbconnect;
