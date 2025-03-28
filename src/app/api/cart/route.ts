import { getCart } from "@/app/lib/cartDB"
import { Db } from "mongodb"
import { NextRequest, NextResponse } from "next/server"

interface CartItem {
  quantity: number
  name: string
  price: number
  img: string
}

interface CartDocument {
  userId: string
  items: CartItem[]
}

const updateCart = async (
  userId: string,
  cartItem: CartItem,
  db: Db
): Promise<void> => {
  try {
    const cartCollection = db.collection<CartDocument>("cart")
    const userCart = await cartCollection.findOne({ userId })

    if (userCart) {
      const existingItemIndex = userCart.items.findIndex(
        (item) => item.name === cartItem.name
      )

      if (existingItemIndex > -1) {
        userCart.items[existingItemIndex].quantity = cartItem.quantity
      } else {
        userCart.items.push(cartItem)
      }

      await cartCollection.updateOne(
        { userId },
        { $set: { items: userCart.items } }
      )
    } else {
      await cartCollection.updateOne(
        { userId },
        { $set: { items: [cartItem] } },
        { upsert: true }
      )
    }

    console.log("Cart updated successfully")
  } catch (error) {
    console.error("Failed to update cart:", error)
    if (error instanceof Error) {
      throw new Error("Failed to update cart: " + error.message)
    } else {
      throw new Error("Failed to update cart")
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log("Received body:", body) // Log the entire body for debugging

    // Extract userId and cartItem from the body
    const { userId, cartItem } = body

    if (!userId || !cartItem) {
      console.log("Invalid request body: userId or cartItem is missing")
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      )
    }

    console.log("UserId:", userId)
    console.log("Cart item to be added:", cartItem)

    const db = await getCart()
    await updateCart(userId, cartItem, db)

    return NextResponse.json(
      { message: "Cart updated successfully." },
      { status: 200 }
    )
  } catch (e) {
    console.error("Error in POST handler:", e)
    return NextResponse.json(
      { message: "Internal Server Error", error: (e as Error).message },
      { status: 500 }
    )
  }
}
