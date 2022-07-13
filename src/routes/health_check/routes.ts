import { Router } from "express";

const health_check_router = Router();

health_check_router.get("/", (req, res) => {
  res.send("Working!");
});
export { health_check_router };
