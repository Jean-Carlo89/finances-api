import "reflect-metadata";
import { app } from "./app";
import { close_connection, connect_to_db } from "./database";

const PORT = 8002;

const server = app.listen(PORT, async () => {
  const connection = await connect_to_db();

  // console.log(connection);

  process.on("SIGINT", async () => {
    try {
      if (connection.isInitialized) {
        await close_connection();
      }

      server.close();
      console.log("Application shutting down...");
    } catch (e) {
      console.log("Error during shutdown");
      console.error(e.message);
    }
  });

  console.log(`Api listening in port: ${PORT}`);
});
