module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc724e50b7b7b7fef5f8df0b9f2d002a'),
  },
});
