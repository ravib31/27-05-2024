import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectedDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`connected to db !! ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectedDB;
