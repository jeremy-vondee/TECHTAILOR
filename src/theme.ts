"use client"
import localFont from "next/font/local"
import { createTheme } from "@mui/material/styles"

const openSans = localFont({
  src: "./app/font/OpenSans-Regular.ttf",
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
    fontFamily: openSans.style.fontFamily
  }
})

export default theme
