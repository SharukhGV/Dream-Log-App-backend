


const { Client } = require('pg'); // PostgreSQL library for Node.js

const connectionString = 'postgresql://sharukh:NyQS1FjwpYclFJph3FwOWg@dream-log-app-full-stack-5052.g8z.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full';

const client = new Client({
  connectionString: connectionString
});

client.connect()
  .then(() => {
    console.log('Connected to CockroachDB');
  })
  .catch(error => {
    console.error('Error connecting to CockroachDB:', error);
  });

module.exports = client;








// // module.exports = {
// //       user: "postgres",
// //       host: "localhost",
// //       database: "nodeapp",
// //       password: "yourPassword",
// //       port: 5432,
// //     };

//     // File required for local and hosted apps

// // http://vitaly-t.github.io/pg-promise/module-pg-promise.html


// const pgp = require("pg-promise")();
// require("dotenv").config();

// // const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;
// const cn = process.env.DATABASE_URL
//   ? {
//       connectionString: process.env.DATABASE_URL,
//       max: 30,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     }
//   : {
//       host: process.env.PG_HOST,
//       port: process.env.PG_PORT,
//       database: process.env.PG_DATABASE,
//       user: process.env.PG_USER,
//     };

// console.log(cn)


// const db = pgp(cn);

// module.exports = db;


