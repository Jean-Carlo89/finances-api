import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { main_router } from "./main_router";
import * as x from "body-parser";

const app = express();

app.use(cors());

app.use(express.text());

app.use(x.json());

app.use(morgan("dev"));

app.use(main_router);

export { app };
