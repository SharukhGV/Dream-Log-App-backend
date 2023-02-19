// module.exports = {
//       user: "postgres",
//       host: "localhost",
//       database: "nodeapp",
//       password: "yourPassword",
//       port: 5432,
//     };

    // File required for local and hosted apps

// http://vitaly-t.github.io/pg-promise/module-pg-promise.html


const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };
console.log(cn)


const db = pgp(cn);

module.exports = db;
