import { FC } from "react"
import { useParams } from "react-router-dom"
//*MUI importation
import { Stack, Grid, Box, Typography, Divider, Button } from "@mui/material"
//* Layout importation
import Header from "../layout/Header"
import Footer from "../layout/Footer"
//* ErrorPage importation
import ErrorPage from "../pages/ErrorPage"
//* Fetch util importation
import { useProductStore } from "../store/useProductStore"

const ProductPage: FC = () => {
    const { product } = useParams<string>()
    const data = useProductStore((state) => state.data)

    return (
        <>
            {data !== null &&
            data !== undefined &&
            Object.values(data).find((productDetail) =>
                productDetail.find(
                    (productName) => productName.name === product
                )
            ) ? (
                <>
                    <Header />
                    {Object.values(data).map((productItem) =>
                        Object.values(productItem).map((item) => {
                            return item.name === product ? (
                                <Grid
                                    container
                                    mt={{ xs: 14, sm: 18, md: 20 }}
                                    mb={8}
                                    key={item.name}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Box
                                            component="img"
                                            alt={`${item.name} image`}
                                            src={item.img}
                                            sx={{
                                                width: "100%",
                                                height: "18rem",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        pl={{ xs: 3 }}
                                        pr={{ xs: 3 }}>
                                        <Typography
                                            sx={{
                                                fontWeight: "bolder",
                                                fontSize: "2rem",
                                            }}>
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: "bolder",
                                                fontSize: "1.75rem",
                                            }}>
                                            {`GH₵ ` + item.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            disableElevation
                                            sx={{
                                                width: "fit-content",
                                                marginTop: "8px",
                                            }}>
                                            add to cart
                                        </Button>
                                        <Divider sx={{ marginTop: "16px" }} />
                                        <Stack>
                                            <Typography mt={3}>
                                                Description
                                            </Typography>
                                            <Stack
                                                mt={1}
                                                flexDirection={"row"}
                                                alignItems={"center"}
                                                sx={{ height: "2rem" }}>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontWeight: "bold",
                                                    }}>
                                                    BRAND
                                                </Typography>
                                                <Typography
                                                    pl={1}
                                                    sx={{
                                                        fontWeight: "bold",
                                                    }}>
                                                    {item.brand}
                                                </Typography>
                                            </Stack>
                                            <Typography>
                                                {item.fullSpecs}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            ) : (
                                ""
                            )
                        })
                    )}
                    <Footer />
                </>
            ) : (
                <ErrorPage />
            )}
        </>
    )
}

export default ProductPage
