import mongoose from "mongoose";
import { env } from "../dotenv";

export class MongoConnection {
   static async connect() {
      try {
         mongoose.connection.on("open", () =>
            console.log("MongoDB's connection made successfully! Welcome!✅✨")
         );
         mongoose.connection.on("error", () =>
            console.log("Something occurred with MongoDB's connection.❌🤨🤔")
         );
         mongoose.connection.on("close", () =>
            console.log("Connection with MongoDB was closed! Bye Bye!👋👋👋")
         );

         await mongoose.connect(env.MONGO_URL);

      } catch (error: any) {
         throw new Error(error);
      }
   }

   static disconnect() {
      return mongoose.disconnect();
   }
}
