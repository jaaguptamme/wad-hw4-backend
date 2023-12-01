// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "sql",
    database: "[add the name of your database here]",
    host: "localhost",
    port: "5432"
});

module.exports = pool;