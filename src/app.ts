import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { main_router } from "./main_router";
import * as body_parser from "body-parser";

const app = express();

app.use(cors());

app.use(express.text());

app.use(body_parser.json());

app.use(morgan("dev"));

app.use(main_router);

export { app };
