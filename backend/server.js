import express from "express";
import cors from "cors";
import { products } from "./data/products.js";

const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("server listening to port 3000");
});

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/api/products/all", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", async (req, res) => {
  const parsedId = parseInt(req.params.id);

  const foundProduct = await products.find(
    (product) => product.id === parsedId,
  );
  res.status(200).json(foundProduct);
});
