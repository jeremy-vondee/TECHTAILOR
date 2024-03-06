import { FC } from "react"
import { useParams } from "react-router-dom"
import Header from "../layout/Header"
//* Fetch util importation
import useFetch from "../hook/useFetch"
import { Stack, Grid, Box, Typography, Button } from "@mui/material"
import Footer from "../layout/Footer"

const ProductsPage: FC = () => {
    const { category } = useParams<string>()
    const { fetchRes, error } = useFetch("/products")

    return (
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
                    gap={{ sm: 5, md: 3 }}
                    rowGap={{ md: 5 }}
                    columnGap={{ xs: 3, sm: 5, md: 0 }}>
                    {fetchRes !== null && fetchRes !== undefined
                        ? Object.entries(fetchRes).map(([key, value]) => {
                              return key === category
                                  ? value.map((item) => {
                                        return (
                                            <Grid
                                                item
                                                key={item.name}
                                                xs={5}
                                                md={3}
                                                sx={{
                                                    maxWidth: {
                                                        xs: "fit-content",
                                                        sm: "100%",
                                                    },
                                                }}>
                                                <Box
                                                    component="img"
                                                    alt={`${item.name} image`}
                                                    src={item.img}
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
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            fontSize: "1.1rem",
                                                        }}>
                                                        {item.price}
                                                    </Typography>
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            width: "fit-content",
                                                            marginTop: "8px",
                                                        }}>
                                                        add to cart
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        )
                                    })
                                  : ""
                          })
                        : ""}
                </Grid>
            </Stack>
            <Footer />
        </>
    )
}
export default ProductsPage
