import { create } from "zustand"
import { productDataType } from "./useProductStore"
import { persist } from "zustand/middleware"

export type cartType = {
    cartItems: productDataType[]
    addItemToCart: (item: productDataType) => void
    increaseQuantity: (item: productDataType) => void
    decreaseQuantity: (item: productDataType) => void
}

export const useAddToCartStore = create(
    persist<cartType>(
        (set, get) => ({
            cartItems: [],

            addItemToCart: (item) => {
                const itemExist = get().cartItems.find(
                    (cartItem) => cartItem.name === item.name
                )

                if (itemExist) {
                    if (typeof itemExist.quantity === "number") {
                        itemExist.quantity++
                    }

                    set({ cartItems: [...get().cartItems] })
                } else {
                    set({
                        cartItems: [
                            ...get().cartItems,
                            { ...item, quantity: 1 },
                        ],
                    })
                }
            },

            increaseQuantity: (item) => {
                const items = get().cartItems
                const itemExist = items.find(
                    (cartItem) => cartItem.name === item.name
                )

                if (itemExist) {
                    if (typeof itemExist.quantity === "number") {
                        itemExist.quantity++
                    }

                    set({ cartItems: [...items] })
                }
            },

            decreaseQuantity: (item) => {
                const items = get().cartItems
                const itemExist = items.find(
                    (cartItem) => cartItem.name === item.name
                )

                if (itemExist) {
                    if (itemExist.quantity === 1) {
                        const updatedCartItems = get().cartItems.filter(
                            (productItem) => productItem.name !== item.name
                        )
                        set({ cartItems: updatedCartItems })
                    } else {
                        itemExist.quantity--
                        set({ cartItems: [...get().cartItems] })
                    }
                }
            },
        }),
        { name: "cart-items" }
    )
)
