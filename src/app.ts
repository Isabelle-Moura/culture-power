import "dotenv/config";
import { MongoConnection } from "./config/database/db-connection";
import { env } from "./config/dotenv";
import { app } from "./server";

MongoConnection.connect();

app.listen(env.PORT, () =>
   console.log(`🚀 Hello there, mate! Server is running at port ${env.PORT}!🚀`)
);
