import { create } from "zustand"
import axios, { AxiosError } from "axios"

export interface productDataType {
    name: string
    brand: string
    price: number
    keySpecs: {
        [key: string]: string[]
    }
    fullSpecs: string
    img: string
}

export type productType = {
    data: {
        [key: string]: [productDataType]
    } | null
    fetch: () => Promise<void>
}

export const useProductStore = create<productType>((set) => ({
    data: null,
    fetch: async () => {
        try {
            const res = await axios.get("/api/products")
            set({ data: res.data })
        } catch (error) {}
    },
}))
