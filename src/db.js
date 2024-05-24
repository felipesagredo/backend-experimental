import pg from 'pg';

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "fgk59efg4f",
    database: "fs",
    port: "5432"
});

