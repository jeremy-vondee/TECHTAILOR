import mongoose, { Schema } from "mongoose"

interface ProductItem {
  [key: string]: Array<{
    name: string
    brand: string
    price: number
    oldPrice: number
    keySpecs: {
      [key: string]: string[]
    }
    fullSpecs: string
    img: string
    quantity: number
    rating: number
  }>
}

interface Products {
  [key: string]: [ProductItem]
}

const ProductSchema: Schema = new mongoose.Schema(
  {
    laptops: [{ type: Schema.Types.Mixed }],
    phones: [{ type: Schema.Types.Mixed }],
    consoles: [{ type: Schema.Types.Mixed }],
    toys: [{ type: Schema.Types.Mixed }],
    securities: [{ type: Schema.Types.Mixed }],
    hardwares: [{ type: Schema.Types.Mixed }],
    accessories: [{ type: Schema.Types.Mixed }],
    acs: [{ type: Schema.Types.Mixed }],
    tvs: [{ type: Schema.Types.Mixed }],
    printers: { type: Array, default: [] }
  },
  { timestamps: true }
)

export default mongoose.models.Product ||
  mongoose.model<Products>("products", ProductSchema)
