import { FC } from "react"
import { Link as routerLink, useParams } from "react-router-dom"
//*MUI importation
import { Link, Stack, Grid, Box, Typography, Button } from "@mui/material"
//* Fetch util importation
import { productDataType, useProductStore } from "../store/useProductStore"
import { useAddToCartStore } from "../store/useAddToCartStore"
//* Layout importation
import Header from "../layout/Header"
import Footer from "../layout/Footer"
//* ErrorPage importation
import ErrorPage from "../pages/ErrorPage"

const ProductsPage: FC = () => {
    const { category } = useParams<string>()
    const data = useProductStore((state) => state.data)
    const { addItemToCart } = useAddToCartStore()
    const onAddToCart = (keys: productDataType) => {
        addItemToCart(keys)
    }

    return (
        <>
            {data !== null &&
            data !== undefined &&
            Object.keys(data).find((product) => product === category) ? (
                <>
                    <Header />
                    <Stack
                        mt={{ xs: 14, sm: 18 }}
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        mb={5}>
                        <Grid
                            container
                            pl={4}
                            mt={5}
                            mb={4}
                            gap={{ sm: 5, md: 3 }}
                            rowGap={{ md: 5 }}
                            columnGap={{ xs: 3, sm: 5, md: 0 }}>
                            {Object.entries(data)
                                .filter(([key, _]) => key === category)
                                .map(([key, val]) =>
                                    val.map((keys, index) => (
                                        <Grid
                                            item
                                            xs={5}
                                            md={3}
                                            sx={{
                                                maxWidth: {
                                                    xs: "fit-content",
                                                    sm: "100%",
                                                },
                                            }}>
                                            <Link
                                                component={routerLink}
                                                key={`${keys.name}-${index}`}
                                                underline="none"
                                                to={`/${keys.name}`}>
                                                <Box
                                                    component="img"
                                                    alt={`${keys.name} image`}
                                                    src={keys.img}
                                                    sx={{
                                                        width: {
                                                            xs: "100%",
                                                            sm: "12.5rem",
                                                            lg: "18.75rem",
                                                        },
                                                        height: "10rem",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                                <Stack>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "1.1rem",
                                                        }}>
                                                        {keys.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            fontSize: "1.1rem",
                                                        }}>
                                                        {`GH₵ ` + keys.price}
                                                    </Typography>
                                                </Stack>
                                            </Link>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    width: "fit-content",
                                                    marginTop: "8px",
                                                }}
                                                onClick={() =>
                                                    onAddToCart(keys)
                                                }>
                                                add to cart
                                            </Button>
                                        </Grid>
                                    ))
                                )}
                        </Grid>
                    </Stack>
                    <Footer />
                </>
            ) : (
                <ErrorPage />
            )}
        </>
    )
}
export default ProductsPage
