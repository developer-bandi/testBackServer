const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const productRouter = require("./routes/product");
const likeRouter = require("./routes/like");
const basketRouter = require("./routes/basket");
const purchaseRouter = require("./routes/purchase");

const app = express();
dotenv.config();
app.use(cors());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((error) => {
    console.log("에러 발생");
    console.error(error);
  });
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRouter);
app.use("/like", likeRouter);
app.use("/basket", basketRouter);
app.use("/purchase", purchaseRouter);
app.use((req, res, next) => {
  const error = new Error(`${req.method}${req.url}라우터가 없습니다`);
  error.stauts = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err);
  return res.send(err);
});

app.listen(process.env.PORT || 3306, () => {
  console.log(process.env.PORT || 3306 + "번 포트에서 대기중");
});
