import postgres from "postgres";
import "dotenv/config";

const sql = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.SSL_MODE === "1" ? true : false,
});

export default sql;
