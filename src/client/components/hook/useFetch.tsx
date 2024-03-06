import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

export type productType = {
    name: string
    brand: string
    price: number
    keySpecs: {
        [key: string]: string[]
    }
    spec: string
    img: string
}

export type fetchResponseType = {
    [key: string]: productType[]
}

const useFetch = (url: string) => {
    const [fetchRes, setFetchRes] = useState<fetchResponseType | null>(null)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url)
                setFetchRes(res.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const AxiosError = error as AxiosError
                    throw { AxiosError }
                } else {
                    throw { error }
                }
            }
        }
        fetchData()
    }, [])
    return { fetchRes, error }
}

export default useFetch
