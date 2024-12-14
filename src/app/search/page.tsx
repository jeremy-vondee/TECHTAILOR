"use client"
import React, { useMemo } from "react"
import { Box, Grid2, Link, Stack, Typography } from "@mui/material"
import Header from "../_components/header/page"
import { useSearchParams } from "next/navigation"
import { useProductStore } from "@/store/productStore"
import StarRateIcon from "@mui/icons-material/StarRate"
import NextLink from "next/link"

const Search = () => {
  const searchQuery =
    useSearchParams().get("q")?.toLowerCase() || ("" as string)
  const { products } = useProductStore()

  const filteredProducts = useMemo(() => {
    if (!products) return []
    return Object.entries(products).flatMap(([category, productList]) =>
      productList?.filter(
        (productData) =>
          productData.name.toLowerCase().includes(searchQuery) ||
          productData.brand.toLowerCase().includes(searchQuery) ||
          category.toLowerCase().includes(searchQuery)
      )
    )
  }, [products, searchQuery])

  return (
    <>
      <Header />
      <Grid2
        container
        mt={{ xs: 18, sm: 19, md: 24 }}
        ml={{ xs: 2, sm: 3 }}
        flexDirection={"row"}
        rowSpacing={4}
        columnSpacing={{ xs: 2, sm: 1, md: 3 }}
      >
        {products !== null &&
        products !== undefined &&
        filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid2
              key={product?.name}
              size={{ xs: 5.8, sm: 4, md: 3 }}
              flexDirection={"row"}
              sx={{
                maxWidth: {
                  xs: "100vw",
                  sm: "fit-content"
                }
              }}
            >
              <Link
                component={NextLink}
                underline="none"
                href={`/${product?.name}`}
              >
                <Box
                  component="img"
                  alt={`${product?.name} image`}
                  src={product?.img}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "12.5rem",
                      lg: "18.75rem"
                    },
                    height: { xs: "7rem", md: "10rem" },
                    objectFit: "contain"
                  }}
                />
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 590,
                      width: { xs: "100%" }
                    }}
                  >
                    {product?.name}
                  </Typography>
                  <Stack flexDirection={"row"} gap={1}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.75rem"
                      }}
                    >
                      {`£${product?.price}`}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.75rem",
                        color: "#aaa",
                        textDecoration: "line-through"
                      }}
                    >
                      {`£${product?.oldPrice}`}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row">
                  {[...Array(5)].map((_, index) => (
                    <StarRateIcon
                      key={index}
                      sx={{
                        fontSize: { xs: "0.75rem", md: "0.85rem" }
                      }}
                      color={
                        index < Math.floor(product?.rating || 0)
                          ? "primary"
                          : "disabled"
                      }
                    />
                  ))}
                </Stack>
              </Link>
            </Grid2>
          ))
        ) : (
          <Stack>
            <Box
              component="img"
              alt={"not found icon"}
              src={"/not found.svg"}
              sx={{
                width: "80vw",
                height: { xs: "30vh", sm: "40vh", md: "50vh" },
                objectFit: "contain"
              }}
            />
            <Typography>No exact matches found</Typography>
          </Stack>
        )}
      </Grid2>
    </>
  )
}

export default Search
