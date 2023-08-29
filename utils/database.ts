import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> MongoDB is already connected");
    return;
  }

  try {
    console.log("=> MongoDB connecting..");

    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("=> MongoDB connected");
  } catch (e) {
    console.log("=> MongoDB connection error: ", e);
  }
};
