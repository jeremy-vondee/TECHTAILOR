import axios, { AxiosRequestConfig } from "axios"

export const fetchData = async (
    url: string,
    options?: {
        config?: AxiosRequestConfig
        persistence?: { key: string; version?: number }
    }
) => {
    const { config, persistence } = Object.assign({}, { config: {} }, options)

    if (persistence && "key" in persistence) {
        const persistedData = JSON.parse(
            localStorage.getItem(persistence.key) ?? '{"version":0,"data":{}}'
        )

        if (persistedData.version === +(persistence.version || "0") || 0) {
            return persistedData.data
        }
    }

    const response = await axios.get(url, config)
    const data = response.data
    if (persistence && "key" in persistence) {
        localStorage.setItem(
            persistence.key,
            JSON.stringify({ version: persistence.version ?? 0, data })
        )
    }
    return data
}
