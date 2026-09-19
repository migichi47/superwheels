const express = require("express");
const { products } = require("./products");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home" });
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:category", (req, res) => {
  const {
    params: { category },
  } = req;

  res.send(category);
});

export default app;
