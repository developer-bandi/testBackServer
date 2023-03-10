const express = require("express");
const router = express.Router();
const { User, Product } = require("../models");
const { sequelize } = require("../models");

router.post("/", async (req, res) => {
  const { product, id } = req.body;
  console.log(product);
  try {
    const array = await Promise.all(
      product.map((productId) => {
        return sequelize.query(
          "INSERT INTO `zerowaste`.`purchase` (`product_id`,`user_id`) VALUES (" +
            productId +
            "," +
            id +
            ")"
        );
      })
    );
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    return res.send("ok");
  } catch {
    res.writeHead(203, { "Access-Control-Allow-Origin": "*" });
    return res.send("이미 구매한 물건입니다");
  }
});

router.get("/detail", async (req, res) => {
  const { id } = req.query;
  const result = await User.findOne({
    where: { id },
    include: [
      {
        model: Product,
        as: "userPurchase",
      },
    ],
  });
  res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  return res.send(result);
});

module.exports = router;
