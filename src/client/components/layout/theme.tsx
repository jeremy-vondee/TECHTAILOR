import { createTheme } from "@mui/material"
import "./font.css"

const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#fff",
        },
        text: {
            primary: "#000",
            secondary: "#fff",
        },
    },
    typography: {
        fontFamily: ["OpenSans", "OpenSansLight", "Nasalization"].join(","),
        subtitle1: {
            fontFamily: "Nasalization",
        },
        body2: {
            fontFamily: "OpenSansLight",
        },
        caption: {
            fontFamily: "OpenSansLight",
            fontSize: "10px",
        },
    },
})

export default theme
