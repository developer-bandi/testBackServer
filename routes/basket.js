const express = require("express");
const router = express.Router();
const { User, Product } = require("../models");
const db = require("../models/index");
const { sequelize } = require("../models");

router.get("/", async (req, res) => {
  const { id } = req.query;
  const result = await User.findOne({
    where: { id },
    include: [
      {
        model: Product,
        as: "userBasket",
      },
    ],
  });
  res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  return res.send(
    result.dataValues.userBasket.map(({ dataValues }) => {
      delete dataValues.basket;
      return dataValues;
    })
  );
});

router.get("/detail", async (req, res) => {
  const { id } = req.query;
  const result = await User.findOne({
    where: { id },
    include: [
      {
        model: Product,
        as: "userBasket",
      },
    ],
  });
  res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  return res.send(result);
});

router.post("/", async (req, res) => {
  try {
    const { userId, productId } = req.query;
    const [result, metadata] = await sequelize.query(
      "INSERT INTO `zerowaste`.`basket` (`product_id`,`user_id`) VALUES (" +
        productId +
        "," +
        userId +
        ")"
    );
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    res.send("ok");
  } catch (error) {
    res.writeHead(203, { "Access-Control-Allow-Origin": "*" });
    res.send("이미 담겨있습니다.");
  }
});

router.delete("/", async (req, res) => {
  try {
    console.log(req.query);
    const { userId, productId } = req.query;
    const result = await db.sequelize.models.basket.destroy({
      where: { user_id: Number(userId), product_id: Number(productId) },
    });
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    res.send({ id: Number(productId) });
  } catch (error) {
    console.error(error);
    res.status(403);
    return next(error);
  }
});

module.exports = router;
