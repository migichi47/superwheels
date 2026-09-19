const express = require("express");
const { products } = require("./products");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
