module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "dc724e50b7b7b7fef5f8df0b9f2d002a"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "u6C3P2VU9JGA+dg67pL98A=="),
  },
});
