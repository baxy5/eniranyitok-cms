const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  let config = {};

  if (process.env.DATABASE_URL) {
    config = parse(process.env.DATABASE_URL);
  }

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host || env("DATABASE_HOST", "127.0.0.1"),
        port: config.port || env.int("DATABASE_PORT", 5432),
        database: config.database || env("DATABASE_NAME", "postgres"),
        user: config.user || env("DATABASE_USERNAME", "postgres"),
        password: config.password || env("DATABASE_PASSWORD", ""),
        ssl:
          process.env.NODE_ENV === "production"
            ? {
                rejectUnauthorized: false,
              }
            : false,
      },
      debug: false,
    },
  };
};
