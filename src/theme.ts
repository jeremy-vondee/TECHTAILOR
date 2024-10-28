"use client"
import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
})

export default theme
