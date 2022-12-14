const parse = require('pg-connection-string').parse;

let config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
