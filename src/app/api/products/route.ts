import { NextResponse } from "next/server"
import { getProducts } from "@/app/lib/productDB"

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json(products, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300, s-maxage=300"
      }
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json(
      { error: "Unable to fetch products" },
      { status: 500 }
    )
  }
}
