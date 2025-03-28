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
  isLoggedIn: boolean
}

interface Actions {
  addItemToCart: (item: ProductItem) => void
  increaseItemQuantity: (itemName: string) => void
  decreaseItemQuantity: (itemName: string) => void
  removeItemFromCart: (itemName: string) => void
  setLoggedIn: (status: boolean) => void
}

const saveToAPI = async (cartItem: ProductItem) => {
  try {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: cartItem.name,
        cartItem: {
          quantity: cartItem.quantity,
          name: cartItem.name,
          price: cartItem.price,
          img: cartItem.img
        }
      })
    })
    if (!response.ok) throw new Error("Failed to save cart to API")
    const data = await response.json()
    console.log("Cart item saved successfully:", data)
  } catch (error) {
    console.error("Error saving cart item to API:", error)
  }
}

export const useCartStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      cartList: [],
      isLoggedIn: false,

      setLoggedIn: (status) => set({ isLoggedIn: status }),

      addItemToCart: (item) => {
        set((state) => {
          const existingItem = state.cartList.find(
            (cartItem) => cartItem.name === item.name
          )

          const newCartList = existingItem
            ? state.cartList.map((cartItem) =>
                cartItem.name === item.name
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            : [...state.cartList, { ...item, quantity: 1 }]

          if (state.isLoggedIn) {
            const updatedItem = newCartList.find(
              (cartItem) => cartItem.name === item.name
            )
            if (updatedItem) saveToAPI(updatedItem)
          }
          return { cartList: newCartList }
        })
      },

      increaseItemQuantity: (itemName) => {
        set((state) => {
          const newCartList = state.cartList.map((item) =>
            item.name === itemName
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
          if (state.isLoggedIn) {
            const updatedItem = newCartList.find(
              (item) => item.name === itemName
            )
            if (updatedItem) saveToAPI(updatedItem)
          }
          return { cartList: newCartList }
        })
      },

      decreaseItemQuantity: (itemName) => {
        set((state) => {
          const newCartList = state.cartList.map((item) =>
            item.name === itemName
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          )
          if (state.isLoggedIn) {
            const updatedItem = newCartList.find(
              (item) => item.name === itemName
            )
            if (updatedItem) saveToAPI(updatedItem)
          }
          return { cartList: newCartList }
        })
      },

      removeItemFromCart: (itemName) => {
        set((state) => {
          const newCartList = state.cartList.filter(
            (item) => item.name !== itemName
          )
          if (state.isLoggedIn) {
            const removedItem = state.cartList.find(
              (item) => item.name === itemName
            )
            if (removedItem) saveToAPI({ ...removedItem, quantity: 0 })
          }
          return { cartList: newCartList }
        })
      }
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cartList: state.cartList })
    }
  )
)
