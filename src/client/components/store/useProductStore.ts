import { create } from "zustand"
import axios, { AxiosError } from "axios"
import { useEffect, useMemo, useState } from "react"
import { fetchData } from "../util/network"

export interface productDataType {
    name: string
    brand: string
    price: number
    keySpecs: {
        [key: string]: string[]
    }
    fullSpecs: string
    img: string
    quantity: number
}

export type productType = {
    data: {
        [key: string]: [productDataType]
    } | null
    fetch: () => Promise<void>
}

export const useProductStore = () => {
    const [state] = useState(() => {
        return create<productType>((set) => ({
            data: null,
            fetch: async () => {
                try {
                    const data = await fetchData("/api/products", {
                        persistence: { key: "products" },
                    })
                    set({ data })
                } catch (error) {
                    console.log(error)
                }
            },
        }))
    })

    const { data, fetch } = state()

    useEffect(() => {
        fetch()
    }, [])

    return { data, fetch }
}
