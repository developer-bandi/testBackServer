module.exports = {
  development: {
    username: "root",
    password: "454738a",
    database: "zerowaste",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "kcwnoi0jh6upoalr",
    password: process.env.SEQULIZE_PASSWORD,
    database: "s9oyma8rl8oe4ygg",
    host: "iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mariadb",
  },
};
