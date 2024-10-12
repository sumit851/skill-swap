import mongoose from "mongoose";

const db = async () => {
  await mongoose
    .connect(process.env.DB_URI, {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error(err, "Failed to connect database");
    });
};

export default db;
