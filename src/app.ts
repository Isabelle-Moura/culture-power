import "dotenv/config";
import { MongoConnection } from "./config/database/db-connection";
import { app } from "./server";
import { env } from "./utils/dotenv/dotenv";

MongoConnection.connect();

app.listen(env.PORT, () => console.log(`🚀 Hello there, mate! Server is running at port ${env.PORT}!🚀`));
