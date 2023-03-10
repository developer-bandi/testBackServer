const express = require("express");
const router = express.Router();
const {User, Product} = require("../models");
const db = require("../models/index");
const {sequelize} = require("../models");
const {Op} = require("sequelize");

router.get("/", async (req, res) => {
  const {id} = req.query;
  console.log(id);
  const result = await User.findOne({
    where: {id},
    include: [
      {
        model: Product,
        as: "userLike",
      },
    ],
  });
  console.log(result.dataValues.userLike.map(({dataValues}) => dataValues.id));
  res.status(200);
  return res.send(
    result.dataValues.userLike.map(({dataValues}) => dataValues.id)
  );
});

router.get("/detail", async (req, res) => {
  const {id, page} = req.query;
  const result = await User.findOne({
    where: {id},
    include: [
      {
        model: Product,
        as: "userLike",
      },
    ],
    limit: 8,
    offset: (page - 1) * 8,
  });
  const result2 = await Product.findAll({
    where: {
      id: {
        [Op.in]: result.dataValues.userLike.map(
          ({dataValues}) => dataValues.id
        ),
      },
    },
    include: [
      {
        model: User,
        as: "productLike",
      },
    ],
  });

  res.status(200);
  return res.send(result2);
});

router.post("/", async (req, res) => {
  try {
    console.log(req.query);
    const {userId, productId} = req.query;
    console.log(userId, productId);

    const [result, metadata] = await sequelize.query(
      "INSERT INTO `zerowaste`.`like` (`product_id`,`user_id`) VALUES (" +
        productId +
        "," +
        userId +
        ")"
    );
    // console.log(result);
    // const a = await db.sequelize.models.like.create({
    //   product_id: Number(productId),
    // });

    res.send("ok");
  } catch (error) {
    console.error(error);
    res.status(403);
    return next(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    console.log(req.query);
    const {userId, productId} = req.query;
    await db.sequelize.models.like.destroy({
      where: {user_id: Number(userId), product_id: Number(productId)},
    });
    res.send("ok");
  } catch (error) {
    console.error(error);
    res.status(403);
    return next(error);
  }
});

module.exports = router;
