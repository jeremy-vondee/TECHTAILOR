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

  const dbName = process.env.MONGODB_PRODUCT_DB

  const db = client.db(dbName)
  cachedDb = db
  return db
}

export async function getCart(): Promise<Db> {
  try {
    const db = await connectToDatabase()
    return db
  } catch (error) {
    console.error("Failed to connect to database:", error)
    throw new Error("Failed to connect to database")
  }
}
