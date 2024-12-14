import { Db, InsertOneResult, MongoClient } from "mongodb"
import { NextResponse, NextRequest } from "next/server"

const connectToUserDB = async (): Promise<Db> => {
  const uri = process.env.MONGODB_URI as string
  const client = await MongoClient.connect(uri)
  return client.db("userDB")
}

const checkUserExist = async (email: string, db: Db) => {
  return await db.collection("users").findOne({ email })
}

const createUser = async (
  email: string,
  username: string,
  db: Db
): Promise<InsertOneResult> => {
  const userData = await db.collection("users").insertOne({
    email,
    username
  })
  return userData
}

export const POST = async (req: NextRequest) => {
  let client: MongoClient | undefined
  try {
    const { username, email } = await req.json()
    if (!username || !email) {
      // Return a response indicating that username and email are required
      return new NextResponse("Username and email are required.", {
        status: 400
      })
    }
    const db = await connectToUserDB()

    // Check if the user already exists in the database
    const existingUser = await checkUserExist(email, db)
    if (existingUser) {
      // If the user already exists, return a response indicating so
      console.log("User already exists.")
      return new NextResponse("User already exists.", { status: 400 })
    }

    const userData = await createUser(email, username, db)
    console.log(userData)

    return new NextResponse(
      JSON.stringify({ message: "User stored successfully.", userData }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    )
  } catch (e) {
    // If an error occurs during the process, log the error and return an internal server error response
    console.error(e)
    return new NextResponse("Internal Server Error", { status: 500 })
  } finally {
    if (client) {
      await client.close()
    }
  }
}
