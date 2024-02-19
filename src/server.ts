import express from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(routes);

export { app };
