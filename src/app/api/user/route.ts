import { Db, InsertOneResult, MongoClient } from "mongodb"
import { NextResponse, NextRequest } from "next/server"

// Function to check if a user already exists in the database
const checkUserExist = async (email: string, db: Db) => {
  return await db.collection("users").findOne({ email })
}

// Function to create a new user
const createUser = async (
  email: string,
  nickname: string,
  image: string,
  username: string,
  db: Db
): Promise<InsertOneResult> => {
  const userData = await db.collection("users").insertOne({
    email,
    nickname,
    image,
    username
  })
  return userData
}

// Main POST handler function
export const POST = async (req: NextRequest) => {
  let client: MongoClient | undefined

  try {
    const { username, email, nickname, image } = await req.json()

    // Validate input
    if (!username || !email) {
      return new NextResponse("Username and email are required.", {
        status: 400
      })
    }

    client = await MongoClient.connect(process.env.MONGODB_URI as string)
    const db = client.db("userDB")

    // Check if the user already exists in the database
    const existingUser = await checkUserExist(email, db)

    if (existingUser) {
      // If the user already exists, return a response indicating so
      return new NextResponse(
        JSON.stringify({ message: "User logged in.", userData: existingUser }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    }

    // Create a new user since they do not exist
    const userData = await createUser(email, nickname, image, username, db)

    return new NextResponse(
      JSON.stringify({ message: "User stored successfully.", userData }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    )
  } catch (e) {
    console.error(e)
    return new NextResponse("Internal Server Error", { status: 500 })
  } finally {
    // Ensure the client is closed only if it was successfully created
    if (client) {
      await client.close()
    }
  }
}
