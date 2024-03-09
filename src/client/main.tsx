import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//*MUI importation
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./components/layout/theme"
//*Pages importation
const ErrorPage = lazy(() => import("./components/pages/ErrorPage"))
const App = lazy(() => import("./App"))
const ProductsPage = lazy(() => import("./components/pages/ProductsPage"))
const ProductPage = lazy(() => import("./components/pages/ProductPage"))
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
        path: "/categories/:category",
        element: (
            <Suspense>
                {" "}
                <ProductsPage />
            </Suspense>
        ),
    },
    {
        path: "/:product",
        element: (
            <Suspense>
                {" "}
                <ProductPage />
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
