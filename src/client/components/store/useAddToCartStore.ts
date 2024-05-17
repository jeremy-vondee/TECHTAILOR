import { create } from "zustand"
import { productDataType } from "./useProductStore"

interface productType extends productDataType {
    quantity: number
}

export type cartType = {
    cartItems: productType[]
    addItemToCart: (item: productType) => void
    increaseQuantity: (item: string) => void
    decreaseQuantity: (item: string) => void
}

export const useAddToCartStore = create<cartType>((set, get) => ({
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
            set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] })
        }
    },

    increaseQuantity: (item) => {
        const itemExist = get().cartItems.find(
            (cartItem) => cartItem.name === item
        )

        if (itemExist) {
            if (typeof itemExist.quantity === "number") {
                itemExist.quantity++
            }

            set({ cartItems: [...get().cartItems] })
        }
    },

    decreaseQuantity: (item) => {
        const itemExist = get().cartItems.find(
            (cartItem) => cartItem.name === item
        )

        if (itemExist) {
            if (typeof itemExist.quantity === "number") {
                const updatedCartItems = get().cartItems.filter(
                    (item) => item.name !== item.name
                )
                set({ cartItems: updatedCartItems })
            } else {
                itemExist.quantity--
                set({ cartItems: [...get().cartItems] })
            }
        }
    },
}))
