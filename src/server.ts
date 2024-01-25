import express from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(express.static("uploads"))
app.use(routes)

export { app };
