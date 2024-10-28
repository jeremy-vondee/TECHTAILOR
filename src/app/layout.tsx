import * as React from "react"
import type { Metadata } from "next"
import ThemeRegistry from "./util/ThemeRegistry"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{props.children}</ThemeRegistry>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Techtailor",
  description: "Ecommerce store"
}
