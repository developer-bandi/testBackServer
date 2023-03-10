const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const { Op } = require("sequelize");
const { User } = require("../models");
const { infonavigation, info, delivery, review, ask } = require("../rowdata");

const priceList = {
  "10,000원 이하": [0, 10000],
  "10,000원 ~ 30,000원": [10000, 30000],
  "30,000원 ~ 50,000원": [30000, 50000],
  "50,000원 이상": [50000, Infinity],
};

const sortList = {
  베스트: ["createdAt", "DESC"],
  인기순: ["createdAt", "DESC"],
  신상품순: ["createdAt", "DESC"],
  낮은가격순: ["price", "ASC"],
  높은가격순: ["price", "DESC"],
};

router.get("/", async (req, res, next) => {
  let { category, sort, filter, page } = req.query;
  let discount = false;
  let price = null;
  console.log(req.query);
  if (category === "베스트") {
    category = sort;
    sort = "베스트";
  }
  if (!Array.isArray(filter)) {
    filter = filter !== undefined ? [filter] : [];
  }

  filter = filter.filter((el) => {
    if (el === "할인 상품") {
      discount = true;
      return false;
    }
    if (priceList[el] !== undefined) {
      price = priceList[el];
      return false;
    }
    return true;
  });

  const { count, rows } = await Product.findAndCountAll({
    where: {
      category: category === "전체" ? { [Op.ne]: category } : category,
      discountRate: discount ? { [Op.ne]: 0 } : { [Op.lte]: 100 },
      brand: filter.length === 0 ? { [Op.ne]: "모든" } : { [Op.in]: filter },
      price:
        price === null
          ? { [Op.ne]: "모든" }
          : { [Op.and]: [{ [Op.gte]: price[0] }, { [Op.lte]: price[1] }] },
    },
    distinct: true,
    include: [
      {
        model: User,
        as: "productLike",
      },
    ],
    order: [sortList[sort]],
    limit:
      req.query.category === "베스트" || req.query.sort === "인기순" ? 1000 : 9,
    offset:
      req.query.category === "베스트" || req.query.sort === "인기순"
        ? 0
        : (page - 1) * 9,
  });
  let result = rows.map(({ dataValues }) => ({
    ...dataValues,
    productLike: dataValues.productLike.length,
  }));

  if (req.query.category === "베스트" || req.query.sort === "인기순") {
    result.sort((a, b) => b.like - a.like);
    result = result.slice((page - 1) * 9, page * 9);
  }

  console.log({ count, rows: result });
  res.status(200);
  return res.send({ count, rows: result });
});

router.get("/banner", (req, res) => {
  res.status(200);
  return res.send([
    "/image/banner1.png",
    "/image/banner2.png",
    "/image/banner3.png",
    "/image/banner4.png",
  ]);
});

router.get("/detail", async (req, res) => {
  const { id } = req.query;
  const result = await Product.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: "productLike",
      },
    ],
  });
  res.status(200);
  return res.send(result);
});

router.get("/infonavigation", async (req, res) => {
  res.status(200);
  return res.send(JSON.stringify(infonavigation));
});

router.get("/info", async (req, res) => {
  res.status(200);
  return res.send(JSON.stringify(info));
});

router.get("/delivery", async (req, res) => {
  res.status(200);
  return res.send(JSON.stringify(delivery));
});

router.get("/review", async (req, res) => {
  res.status(200);
  return res.send(JSON.stringify(review));
});

router.get("/ask", async (req, res) => {
  res.status(200);
  return res.send(JSON.stringify(ask));
});

router.get("/recommend", async (req, res) => {
  const result = await Product.findAll({
    include: [
      {
        model: User,
        as: "productLike",
      },
    ],
    limit: 4,
  });

  return res.send(result);
});

module.exports = router;
