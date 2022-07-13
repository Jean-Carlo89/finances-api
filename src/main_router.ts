import { Router } from "express";
import { health_check_router } from "./routes/health_check/routes";
import { user_router } from "./routes/users/user";

const main_router = Router();

main_router.use("/health_check", health_check_router);

main_router.use("/user", user_router);

export { main_router };
