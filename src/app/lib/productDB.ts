import { MongoClient, Db } from "mongodb"

let cachedDb: Db | null = null

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable")
  }

  const client = new MongoClient(uri)
  await client.connect()

  const dbName = "productDB"

  const db = client.db(dbName)
  cachedDb = db
  return db
}

export async function getProducts() {
  try {
    const db = await connectToDatabase()
    const products = await db.collection("products").findOne({})
    return JSON.parse(JSON.stringify(products))
  } catch (error) {
    console.error("Failed to fetch products:", error)
    throw new Error("Failed to fetch products")
  }
}
