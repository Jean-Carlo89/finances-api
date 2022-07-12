// import { createConnection } from "net";
// import { User } from "./entity/User";
//import {} from "./entity/*.ts";
// createConnection().then;

import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5431,
  username: "postgres",
  password: "postgres",
  database: "finances",
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/**/entity/*.{ts,js}`],
  // entities: ["./entity/*.ts"],
  //entities: ["./src/infra/typeorm/entities/*.ts"],
});

// name: "default",
// type: "postgres",
// url: process.env.DATABASE_URL,
// entities: [`${process.env.NODE_ENV === "production" ? "dist" : "src"}/entities/*.*`],
// ssl: process.env.NODE_ENV === "production"

let connection: DataSource;
export async function connect_to_db() {
  try {
    connection = await AppDataSource.initialize();
    console.log(connection.isInitialized);
    console.log("Connected to DB postgres");
    return connection;
  } catch (e) {
    console.log("Error connecting to db");
    console.log(e.message);
    return;
  }
}

export function get_connection() {
  return connection;
}

export async function close_connection() {
  await connection.destroy();
  console.log("Connection to db closed");
  // await AppDataSource.destroy();
}
