const Sequelize = require("sequelize");
const config = require("../config");
const Product = require("./product");
const User = require("./user");

const db = {};
const sequelize = new Sequelize(
  config.production.database,
  config.production.username,
  config.production.password,
  config.production
);

db.sequelize = sequelize;
db.Product = Product;
db.User = User;

Product.init(sequelize);
User.init(sequelize);

Product.associate(db);
User.associate(db);

module.exports = db;
