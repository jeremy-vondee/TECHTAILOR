import * as React from "react"
import type { Metadata } from "next"
import ThemeRegistry from "./util/ThemeRegistry"
import { UserProvider } from "@auth0/nextjs-auth0/client"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <UserProvider>
          <ThemeRegistry>{props.children}</ThemeRegistry>
        </UserProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Techtailor",
  description: "Ecommerce store"
}
