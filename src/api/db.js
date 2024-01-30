import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'localhost',
  port: '3309',
  user: 'jflores',
  password: 'Alexx781$',
  database: 'curso_hibernate',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});





