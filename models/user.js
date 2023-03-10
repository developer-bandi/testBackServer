const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        nickname: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "user",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.belongsToMany(db.Product, {
      through: "basket",
      as: "userBasket",
    });
    db.User.belongsToMany(db.Product, {
      through: "purchase",
      as: "userPurchase",
    });
    db.User.belongsToMany(db.Product, {
      through: "like",
      as: "userLike",
    });
  }
};
