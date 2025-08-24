import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error ("Please put in your connection string")
}

let isConnected = false;

export default async function dbConnect() {
    if (isConnected) return;

    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "skillmatch",
        });
        isConnected = true;
        console.log("✅ MongoDB connected")
    } catch (err) {
console.log("❌ MongoDB connection error:", err)
    }
}

//This is our MongoDb connection file, It's where we set the connection for mongoose