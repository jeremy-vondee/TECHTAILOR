import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface ProductDataType {
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
  }> | null
}

interface State {
  products: ProductDataType
  isLoading: boolean
  error: Error | null
}

interface Actions {
  fetchData: () => Promise<void>
}

const initialState: State = {
  products: {},
  isLoading: false,
  error: null
}

export const useProductStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      fetchData: async () => {
        try {
          set({ isLoading: true, error: null })
          const res = await fetch("/api/products/")
          if (!res.ok) {
            throw new Error("Failed to fetch data")
          }
          const data: ProductDataType = await res.json()
          set({ products: data, isLoading: false })
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error
                : new Error("An unknown error occurred"),
            isLoading: false
          })
        }
      }
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
