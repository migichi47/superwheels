import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  id: Number,
  category: String,
  make: String,
  model: String,
  year: Number,
  image: String,
  price: Number,
  description: String,
});

const Product = mongoose.model("Product", productsSchema);
export default Product;
