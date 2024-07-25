import { Link as routerLink, useParams } from "react-router-dom"
//* Fetch util importation
import { productDataType, useProductStore } from "../store/useProductStore"
import { Box, Grid, Link, Stack, Typography } from "@mui/material"
//* ErrorPage importation
import ErrorPage from "../pages/ErrorPage"
import { FC, useState } from "react"
import AddToCartButton from "../layout/AddToCartButton"
import Header from "../layout/Header"

const SearchPage: FC = () => {
    const params = useParams()
    const searchParm = params["search-pram"] || ""
    const { data } = useProductStore()
    const [searchResult, setSearchResult] = useState<productDataType[]>([])
    const results: productDataType[] = []

    if (data) {
        Object.entries(data).forEach(([category, products]) => {
            products.forEach((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .includes(searchParm.toLowerCase()) ||
                    product.brand
                        .toLowerCase()
                        .includes(searchParm.toLowerCase()) ||
                    category.toLowerCase().includes(searchParm.toLowerCase())
                ) {
                    results.push(product)
                }
            })
        })
    }
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
                    mb={4}
                    gap={{ sm: 5, md: 3 }}
                    rowGap={{ md: 5 }}
                    columnGap={{ xs: 3, sm: 5, md: 0 }}>
                    {results.map((item, index) => {
                        return (
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
                                    key={`${item.name}-${index}`}
                                    underline="none"
                                    to={`/${item.name}`}>
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
                                            {`GH₵ ` + item.price}
                                        </Typography>
                                    </Stack>
                                </Link>
                                <AddToCartButton productItem={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </>
    )
}
export default SearchPage
