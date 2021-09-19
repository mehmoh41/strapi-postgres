module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1212),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '09f258c6d147c9e5786643a0acf5b4b0'),
    },
  },
});
