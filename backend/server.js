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
  } catch (err) {
    res.status(500).json({ msg: "Could not fetch products" });
  }
});


app.get("/api/products/recommended", async (req, res) => {
  try {
    const products = await Product.find().limit(10);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Could not fetch products" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const foundProduct = await Product.findById(req.params.id);

  if (!foundProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  res.status(200).json(foundProduct);
});

