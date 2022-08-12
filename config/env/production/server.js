module.exports = ({ env }) => ({
  url: env('HEROKU_URL'),
  host: '0.0.0.0',
  port: env.int('PORT'),
  webhooks: {
    defaultHeaders: {
      Authorization: 'Bearer my-very-secured-token',
    },
  },
});
