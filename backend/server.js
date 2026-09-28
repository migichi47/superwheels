import "dotenv/config";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./models/Product.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log("server listening to port 3000");
});

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/api/products/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {}
});

app.get("/api/products/:id", async (req, res) => {
  const parsedId = parseInt(req.params.id);

  const products = await Product.find();
  const foundProduct = await products.find(
    (product) => product.id === parsedId,
  );
  res.status(200).json(foundProduct);
});
