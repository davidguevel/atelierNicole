const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

//psql a voir
// postgresql://user:password@localhost/triple_triad
// // process.env.PG_URL

client.connect();

module.exports = client;