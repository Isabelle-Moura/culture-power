import mongoose from "mongoose";
import { env } from "../dotenv";

//FIXME: Algo tá acontecendo com a conexão com o Mongo :/
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
      } catch (error: any) {
         throw new Error(error);
      }
      return await mongoose.connect(env.DATABASE_URL);
   }

   static disconnect() {
      return mongoose.disconnect();
   }
}
