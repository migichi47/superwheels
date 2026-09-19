import express from "express";
import products from "./products.js";
import cors from "cors";
const app = express();

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
