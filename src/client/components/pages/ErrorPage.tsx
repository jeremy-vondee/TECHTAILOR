//*Router link
import { Link as routerLink } from "react-router-dom"
//*MUI importation
import { Box, Link, Typography } from "@mui/material"
import { Home } from "@mui/icons-material"

import Error from "../../assets/Error 404.svg"

const ErrorPage = () => {
    return (
        <>
            <Link component={routerLink} to="/">
                <Home fontSize="large" />
            </Link>
            <Box
                component="img"
                alt="Error 404 image"
                mt={3}
                sx={{
                    width: "100vw",
                    height: "60vh",
                    zIndex: -10,
                }}
                src={Error}
            />
            <Typography align="center">
                OOPPSS page not found return to the{" "}
                <Link component={routerLink} to="/">
                    home page
                </Link>
            </Typography>
        </>
    )
}

export default ErrorPage
