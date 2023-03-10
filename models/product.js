const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        category: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        discountRate: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        badges: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        thumnail: {
          type: Sequelize.STRING(10000),
          allowNull: false,
        },
        summary: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: "Product",
        tableName: "product",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Product.belongsToMany(db.User, {
      through: "basket",
      as: "productBasket",
    });
    db.Product.belongsToMany(db.User, {
      through: "purchase",
      as: "productPurchase",
    });
    db.Product.belongsToMany(db.User, {
      through: "like",
      as: "productLike",
    });
  }
};
