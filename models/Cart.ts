import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
  items: [
    {
      quantity: { type: Number, default: 1 },
      name: String,
      img: String,
      price: Number
    }
  ]
})

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema)
