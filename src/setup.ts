import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "test" ? ".env.test" : process.env.NODE_ENV === "staging" ? ".env.staging" : ".env";

dotenv.config({
  path: envFile,
});
