import { DataSource, EntityTarget } from "typeorm";

const AppDataSource = new DataSource({
  name: "postgres_connection",
  type: "postgres",
  host: "localhost",
  port: 5431,
  username: "postgres",
  password: "postgres",
  database: "finances",
  synchronize: process.env.NODE_ENV === "production" ? false : true,
  logging: process.env.NODE_ENV === "production" ? false : true,
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
    console.log(`Connected to DB postgres :${AppDataSource.options.database}`);
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

export function get_repository() {
  return AppDataSource.manager;
}

export async function close_connection() {
  await connection.destroy();
  console.log("Connection to db closed");
  // await AppDataSource.destroy();
}
