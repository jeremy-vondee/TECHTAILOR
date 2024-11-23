"use client"
import React, { use } from "react"
import { useProductStore } from "@/store/productSotre"
import Header from "../_components/header/page"
import { Box, Button, Grid2, Stack, Typography, useTheme } from "@mui/material"
import Footer from "../_components/footer/page"
import StarRateIcon from "@mui/icons-material/StarRate"

interface ProductPageProps {
  params: Promise<{ productName: string }>
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productName } = use(params)
  const decodedProductName = decodeURIComponent(productName)

  const { products, isLoading, error } = useProductStore()

  const theme = useTheme()

  const foundProduct = products
    ? Object.values(products)
        .flatMap((productList) => productList)
        .find((product) => product?.name === decodedProductName)
    : null

  if (isLoading) return <>loading</>

  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Header />

      {foundProduct && (
        <Grid2
          container
          mt={{ xs: 18, sm: 19, md: 24 }}
          flexDirection={"row"}
          rowSpacing={4}
          columnSpacing={{ xs: 2, sm: 1, md: 3 }}
        >
          <Grid2 key={foundProduct.name} size={{ xs: 12, sm: 7.5, md: 7 }}>
            <Box
              component="img"
              alt={`${foundProduct.name} image`}
              src={foundProduct.img}
              sx={{
                width: "100%",
                maxHeight: { xs: "15rem", sm: "18rem" },
                objectFit: "contain"
              }}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 4, md: 3 }}
            ml={{ xs: 3, sm: 0 }}
            mr={{ xs: 3, sm: 0 }}
          >
            <Stack flexDirection={"column"}>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontSize: "1.375rem"
                }}
              >
                {foundProduct.name}
              </Typography>
              <Stack flexDirection={"row"} alignItems={"center"}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "1.5rem"
                  }}
                >
                  {`£${foundProduct.price}`}
                </Typography>
                <Typography
                  ml={1}
                  variant="caption"
                  sx={{
                    fontSize: "0.75rem",
                    color: "#aaa",
                    textDecoration: "line-through"
                  }}
                >
                  {`£${foundProduct.oldPrice}`}
                </Typography>
              </Stack>
              <Stack direction="row">
                {[...Array(5)].map((_, index) => (
                  <StarRateIcon
                    key={index}
                    sx={{
                      fontSize: { xs: "0.75rem", md: "0.85rem" }
                    }}
                    color={
                      index < Math.floor(foundProduct.rating)
                        ? "primary"
                        : "disabled"
                    }
                  />
                ))}
              </Stack>
              <Typography
                mt={1}
                variant="caption"
                sx={{
                  fontSize: "0.875rem"
                }}
              >
                Free delivery
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.875rem"
                }}
              >
                Local taxes included (where applicable)
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.875rem"
                }}
              >
                Returns & exchanges accepted within 30 days
              </Typography>
              <Button
                sx={{
                  background: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  marginTop: 3,
                  paddingTop: 1.5,
                  paddingBottom: 1.5
                }}
              >
                Add to cart
              </Button>
              <Button
                sx={{
                  background: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  marginTop: 2,
                  paddingTop: 1.5,
                  paddingBottom: 1.5
                }}
              >
                Buy now
              </Button>
            </Stack>
          </Grid2>
          <Grid2>
            <Stack
              justifyContent={"center"}
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: { xs: "10vh", sm: "12vh" },
                verticalAlign: "middle"
              }}
            >
              <Typography
                ml={3}
                sx={{
                  fontSize: { xs: "24px", sm: "32px" },
                  fontWeight: "bolder",
                  color: theme.palette.secondary.main
                }}
              >
                DESCRIPTION
              </Typography>
            </Stack>
            <Stack
              mt={3}
              ml={3}
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ height: "2rem" }}
            >
              <Typography>Brand</Typography>
              <Typography
                pl={1}
                sx={{
                  fontWeight: "bold"
                }}
              >
                {foundProduct.brand}
              </Typography>
            </Stack>
            <Stack mt={3} ml={3} mr={4}>
              <Typography>{foundProduct.fullSpecs}</Typography>
            </Stack>
          </Grid2>
        </Grid2>
      )}
      <Footer />
    </>
  )
}

export default ProductPage
