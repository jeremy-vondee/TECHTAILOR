"use client"
import React from "react"
import { useProductStore } from "@/store/productSotre"
import Grid from "@mui/material/Grid2"
import { Box, Link, Stack, Typography, useTheme } from "@mui/material"
import NextLink from "next/link"

const FeaturedProducts = ({
  featuredCategory
}: {
  featuredCategory: string
}) => {
  const { products } = useProductStore()
  const theme = useTheme()

  return (
    <>
      <Stack mt={20}>
        <Stack
          justifyContent={"center"}
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: "12vh",
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
            {featuredCategory.toUpperCase()}
          </Typography>
        </Stack>
        <Grid
          container
          pl={4}
          mt={4}
          gap={{ xs: 3, sm: 5, md: 3 }}
          columnGap={{ xs: 4, sm: 5 }}
        >
          {products !== null
            ? Object.entries(products)
                .filter(([category]) => category === featuredCategory)
                .flatMap(([, categoryProducts]) =>
                  Object.entries(categoryProducts ?? {})
                    .slice(0, 4)
                    .map(([, product]) => (
                      <Grid
                        key={product.name}
                        size={{ xs: 5, sm: 4, md: 3 }}
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
                          key={product.name}
                          underline="none"
                          href={`/${product.name}`}
                        >
                          <Box
                            component="img"
                            alt={`${product.name} image`}
                            src={product.img}
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
                              sx={{
                                fontSize: { xs: "0.75rem", md: "1.1rem" },
                                fontWeight: 590,
                                width: { xs: "100%" }
                              }}
                            >
                              {product.name}
                            </Typography>

                            <Typography
                              variant="caption"
                              sx={{
                                fontSize: { xs: "0.75rem", md: "1.1rem" }
                              }}
                            >
                              {`£${product.price}`}
                            </Typography>
                          </Stack>
                        </Link>
                      </Grid>
                    ))
                )
            : "No product found"}
        </Grid>
      </Stack>
    </>
  )
}

export default FeaturedProducts
