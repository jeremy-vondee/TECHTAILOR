"use client"
import localFont from "next/font/local"
import { createTheme } from "@mui/material/styles"

const openSans = localFont({
  src: "./app/font/OpenSans-Regular.ttf",
  display: "swap"
})
const openSansBold = localFont({
  src: "./app/font/OpenSans-Semibold.ttf",
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
    fontFamily: [openSans.style.fontFamily, openSansBold.style.fontFamily].join(
      ","
    ),
    body1: {
      fontFamily: openSans.style.fontFamily
    },
    body2: {
      fontFamily: openSansBold.style.fontFamily
    }
  }
})

export default theme
