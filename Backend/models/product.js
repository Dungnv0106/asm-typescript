import mongoose from "mongoose";

const ProductChema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", ProductChema);
