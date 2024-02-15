import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//*MUI importation
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./components/layout/theme"
//*Pages importation
const AccessoriesPage = lazy(() => import("./components/pages/AccessoriesPage"))
const ConsolesPage = lazy(() => import("./components/pages/ConsolesPage"))
const ErrorPage = lazy(() => import("./components/pages/ErrorPage"))
const App = lazy(() => import("./App"))
const LaptopsPage = lazy(() => import("./components/pages/LaptopsPage"))
const PhonesPage = lazy(() => import("./components/pages/PhonesPage"))
const PrintersPage = lazy(() => import("./components/pages/PrintersPage"))
const TvsPage = lazy(() => import("./components/pages/TvsPage"))
const ToysPage = lazy(() => import("./components/pages/ToysPage"))
const HardwaresPage = lazy(() => import("./components/pages/HardwaresPage"))
const SecuritysPage = lazy(() => import("./components/pages/SecuritysPage"))
const SignInPage = lazy(() => import("./components/pages/SignInPage"))
const SignUpPage = lazy(() => import("./components/pages/SignUpPage"))

//*Route destinations
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sign-in",
        element: (
            <Suspense>
                {" "}
                <SignInPage />
            </Suspense>
        ),
    },
    {
        path: "/sign-up",
        element: (
            <Suspense>
                {" "}
                <SignUpPage />
            </Suspense>
        ),
    },
    {
        path: "/category/phones",
        element: (
            <Suspense>
                {" "}
                <PhonesPage />
            </Suspense>
        ),
    },
    {
        path: "/category/tvs",
        element: (
            <Suspense>
                {" "}
                <TvsPage />
            </Suspense>
        ),
    },
    {
        path: "/category/printers",
        element: (
            <Suspense>
                {" "}
                <PrintersPage />
            </Suspense>
        ),
    },
    {
        path: "/category/laptops",
        element: (
            <Suspense>
                {" "}
                <LaptopsPage />
            </Suspense>
        ),
    },
    {
        path: "/category/toys",
        element: (
            <Suspense>
                {" "}
                <ToysPage />
            </Suspense>
        ),
    },
    {
        path: "/category/hardwares",
        element: (
            <Suspense>
                {" "}
                <HardwaresPage />
            </Suspense>
        ),
    },
    {
        path: "/category/securitys",
        element: (
            <Suspense>
                {" "}
                <SecuritysPage />
            </Suspense>
        ),
    },
    {
        path: "/category/consoles",
        element: (
            <Suspense>
                {" "}
                <ConsolesPage />
            </Suspense>
        ),
    },
    {
        path: "/category/accessories",
        element: (
            <Suspense>
                {" "}
                <AccessoriesPage />
            </Suspense>
        ),
    },
    {
        path: "/*",
        element: (
            <Suspense>
                {" "}
                <ErrorPage />{" "}
            </Suspense>
        ),
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
