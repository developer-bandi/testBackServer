const express = require("express");
const router = express.Router();
const {User, Product} = require("../models");
const {sequelize} = require("../models");

router.post("/", async (req, res) => {
  const {product, id} = req.body;
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
    res.status(200);
    return res.send("ok");
  } catch {
    res.status(203);
    return res.send("이미 구매한 물건입니다");
  }
});

router.get("/detail", async (req, res) => {
  const {id} = req.query;
  const result = await User.findOne({
    where: {id},
    include: [
      {
        model: Product,
        as: "userPurchase",
      },
    ],
  });
  res.status(200);
  return res.send(result);
});

module.exports = router;
