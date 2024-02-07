import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//*MUI importation
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./components/layout/theme"
//*Pages importation
import AccessoriesPage from "./components/pages/AccessoriesPage"
import ConsolesPage from "./components/pages/ConsolesPage"
import ErrorPage from "./components/pages/ErrorPage"
import LandingPage from "./components/pages/LandingPage"
import LaptopsPage from "./components/pages/LaptopsPage"
import PhonesPage from "./components/pages/PhonesPage"
import PrintersPage from "./components/pages/PrintersPage"
import TvsPage from "./components/pages/TvsPage"
import ToysPage from "./components/pages/ToysPage"
import HardwaresPage from "./components/pages/HardwaresPage"
import SecuritysPage from "./components/pages/SecuritysPage"
import SignInPage from "./components/pages/SignInPage"
import SignUpPage from "./components/pages/SignUpPage"

//*Route destinations
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage />,
    },
    {
        path: "/category/phones",
        element: <PhonesPage />,
    },
    {
        path: "/category/tvs",
        element: <TvsPage />,
    },
    {
        path: "/category/printers",
        element: <PrintersPage />,
    },
    {
        path: "/category/laptops",
        element: <LaptopsPage />,
    },
    {
        path: "/category/toys",
        element: <ToysPage />,
    },
    {
        path: "/category/hardwares",
        element: <HardwaresPage />,
    },
    {
        path: "/category/securitys",
        element: <SecuritysPage />,
    },
    {
        path: "/category/consoles",
        element: <ConsolesPage />,
    },
    {
        path: "/category/accessories",
        element: <AccessoriesPage />,
    },
    {
        path: "/*",
        element: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)
