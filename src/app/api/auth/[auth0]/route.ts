import { handleAuth } from "@auth0/nextjs-auth0"
import { NextResponse } from "next/server"

export const GET = async (
  req: Request,
  { params }: { params: { auth0: string } }
) => {
  try {
    const { auth0 } = await params
    const res = await handleAuth()(req as unknown as Request, {
      params: { auth0 }
    })
    return new NextResponse(res.body, {
      status: res.status,
      headers: res.headers
    })
  } catch (error) {
    console.error("Auth0 error:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
