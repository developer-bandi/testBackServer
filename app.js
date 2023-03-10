const express = require("express");
const path = require("path");
const cors = require("cors");
const {sequelize} = require("./models");
const productRouter = require("./routes/product");
const likeRouter = require("./routes/like");
const basketRouter = require("./routes/basket");
const purchaseRouter = require("./routes/purchase");
const app = express();
app.set("port", 8001);

sequelize
  .sync({force: false})
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((error) => {
    console.error(error);
  });

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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

app.listen(8001, () => {
  console.log("8001번 포트에서 대기중");
});
