import { promises as fs } from "fs"
import path from "path"
import { NextResponse } from "next/server"

interface ProductDataType {
  [key: string]: {
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
}

// In-memory cache
let cachedData: ProductDataType | null = null
let cacheTime: number | null = null

export async function GET() {
  try {
    // Check if cache is valid (e.g., less than 5 minutes old)
    if (cachedData && cacheTime && Date.now() - cacheTime < 5 * 60 * 1000) {
      console.log("Serving from cache")
      return new NextResponse(JSON.stringify(cachedData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300, s-maxage=300" // Cache for 5 minutes
        }
      })
    }

    // If cache is invalid or doesn't exist, read from file
    const filePath = path.join(process.cwd(), "data", "productDetails.json")
    const fileContents = await fs.readFile(filePath, "utf8")
    const data: ProductDataType = JSON.parse(fileContents)

    // Update cache
    cachedData = data
    cacheTime = Date.now()

    console.log("Serving fresh data")
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300, s-maxage=300" // Cache for 5 minutes
      }
    })
  } catch (error) {
    console.error("Error reading file:", error)
    return new NextResponse(JSON.stringify({ error: "Unable to read file" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
