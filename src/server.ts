import "reflect-metadata";
import { app } from "./app";

const PORT = 8002;
app.listen(PORT, async () => {
  console.log(`Api listening in port: ${PORT}`);
});
