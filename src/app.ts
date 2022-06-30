import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());
// HTTP request logger middleware
app.use(morgan("dev"));
app.use(cors());
// HTTP security middleware headers
app.use(helmet());
// add routing for /api path
// error handler middleware

export default app;
