import { DataSource, EntityTarget } from "typeorm";

const AppDataSource = new DataSource({
  name: "postgres_connection",
  type: "postgres",

  //host: "db",
  //port: 5432,
  username: "postgres",
  password: "postgres",
  database: "finances",
  //migrationsRun: true,
  // synchronize: process.env.NODE_ENV === "production" ? false : true,
  synchronize: true,
  logging: process.env.NODE_ENV === "production" ? false : true,
  entities: [`${__dirname}/**/entity/*.{ts,js}`],

  //* for localhost

  host: process.env.HOST,
  port: parseInt(process.env.POSTGRES_PORT),

  // host: "localhost",
  // port: 5431,
});

// name: "default",
// type: "postgres",
// url: process.env.DATABASE_URL,
// entities: [`${process.env.NODE_ENV === "production" ? "dist" : "src"}/entities/*.*`],
// ssl: process.env.NODE_ENV === "production"

let connection: DataSource;
export async function connect_to_db() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.HOST);
  console.log(process.env.PORT);
  console.log(parseInt(process.env.PORT));
  try {
    // console.log(`Connecting to: ${AppDataSource.}`)

    connection = await AppDataSource.initialize();
    console.log(connection.isInitialized);
    // await AppDataSource.runMigrations();
    console.log(`Connected to DB postgres :${AppDataSource.options.database}`);
    return connection;
  } catch (e) {
    console.log("Error connecting to db");
    console.log(e.message);
    console.log(e);
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
