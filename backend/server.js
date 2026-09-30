import "dotenv/config";
import express from "express";
import cors from "cors";
import Product from "./models/Product.js";
import { connectToMongoDB } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/api/products/all", async (req, res) => {
  try {
    await connectToMongoDB();
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Could not fetch products", error: err.message });
  }
});

app.get("/api/products/recommended", async (req, res) => {
  try {
    await connectToMongoDB();
    const products = await Product.find().limit(10);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Could not fetch products" });
  }
});

app.get("/api/products/deal-of-the-day", async (req, res) => {
  try {
    await connectToMongoDB();
    const products = await Product.find();

    if (products.length === 0)
      return res.status(404).json({ msg: "No products available" });

    //picking random product
    const now = new Date();
    const dayNumber = Math.floor(now.getTime() / 86400000);
    const index = dayNumber % products.length;
    const product = products[index];

    // gives 30% discount
    const originalPrice = product.price;
    const dealPrice = Math.floor(originalPrice * 0.7);

    //set expiry time
    const expiresAt = new Date();
    expiresAt.setHours(24, 0, 0, 0);

    res.status(200).json({
      product,
      originalPrice,
      dealPrice,
      expiresAt,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "failed to get deal of the day" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  await connectToMongoDB();
  const foundProduct = await Product.findById(req.params.id);

  if (!foundProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  res.status(200).json(foundProduct);
});

app.get("/api/products", async (req, res) => {
  try {
    await connectToMongoDB();
    const { category } = req.query;
    const products = await Product.find({
      category: category.split(" ").join("").toLowerCase(),
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error in getting query products" });
  }
});

export default app;
