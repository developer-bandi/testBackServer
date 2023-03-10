const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    username: "root",
    password: "454738a",
    database: "zerowaste",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "454738a",
    database: "zerowaste",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "jindfxp1n9vyh03z",
    password: process.env.SEQULIZE_PASSWORD,
    database: "sef7s160yh9mkpsk",
    host: "iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mariadb",
  },
};
