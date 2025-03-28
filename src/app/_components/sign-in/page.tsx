"use client"
import React, { useEffect } from "react"
import { Link, useTheme } from "@mui/material"
import NextLink from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"

const SignIn = () => {
  const { user } = useUser()
  const theme = useTheme()

  useEffect(() => {
    const sendUserDataToServer = async () => {
      if (user && user.name && user.email) {
        // Check if user and its properties exist
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: user.name,
              email: user.email,
              nickname: user.nickname,
              image: user.picture
            })
          })

          if (response.ok) {
            const data = await response.json()
          }
        } catch (error) {
          console.error("Error storing user data:", error)
        }
      }
    }

    sendUserDataToServer()
  }, [user?.name])

  return (
    <>
      <Link
        component={NextLink}
        href="/api/auth/login"
        underline="none"
        fontWeight={"bold"}
        sx={{ color: theme.palette.secondary.main }}
      >
        Sign in
      </Link>
    </>
  )
}

export default SignIn
