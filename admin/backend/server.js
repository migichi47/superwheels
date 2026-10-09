import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.listen(3000, () => {
  console.log("app listening to port:3000");
});

app.get("/", (req, res) => {
  res.send("in the admin home route");
});

// get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).json({ msg: "error in getting products" });
  }
});

// create a new product
app.post("/api/products", async (req, res) => {
  try {
    const { body } = req;
    const product = await Product.create(body);
    res.status(201).send(product);
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error in creating a product", error: err.message });
  }
});

// delete a product
app.delete("/api/products/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ msg: "Product not found" });
    res
      .status(200)
      .json({ msg: "Product removed from database", product: deletedProduct });
  } catch (err) {
    res.status(500).send("couldn't delete product");
  }
});

// update a product
app.patch("/api/products/update/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.status(200).json({ msg: "Product updated", product: updatedProduct });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "couldn't update product", error: err.message });
  }
});

// get a single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json({ msg: "Could not get product", error: err.message });
  }
});
