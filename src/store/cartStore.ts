import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface ProductItem {
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
}

interface State {
  cartList: ProductItem[]
}

interface Actions {
  addItemToCart: (item: ProductItem) => void
  increaseItemQuantity: (itemName: string) => void
  decreaseItemQuantity: (itemName: string) => void
  removeItemFromCart: (itemName: string) => void
}

export const useCartStore = create<State & Actions>()(
  persist(
    (set) => ({
      cartList: [],

      addItemToCart: (item) => {
        set((state) => {
          const existingItem = state.cartList.find(
            (cartItem) => cartItem.name === item.name
          )

          if (existingItem) {
            return {
              cartList: state.cartList.map((cartItem) =>
                cartItem.name === item.name
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            }
          } else {
            return { cartList: [...state.cartList, { ...item, quantity: 1 }] }
          }
        })
      },

      increaseItemQuantity: (itemName) => {
        set((state) => ({
          cartList: state.cartList.map((item) =>
            item.name === itemName
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }))
      },

      decreaseItemQuantity: (itemName) => {
        set((state) => ({
          cartList: state.cartList.map((item) =>
            item.name === itemName
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          )
        }))
      },

      removeItemFromCart: (itemName) => {
        set((state) => ({
          cartList: state.cartList.filter((item) => item.name !== itemName)
        }))
      }
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
