"use client"
import React from "react"
import { useProductStore } from "@/store/productStore"
import { Box, Grid2, Link, Stack, Typography, useTheme } from "@mui/material"
import NextLink from "next/link"
import StarRateIcon from "@mui/icons-material/StarRate"

const FeaturedProducts = ({
  featuredCategory
}: {
  featuredCategory: string
}) => {
  const { products } = useProductStore()
  const theme = useTheme()
  return (
    <>
      <Stack mt={5}>
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
            {featuredCategory.toUpperCase()}
          </Typography>
        </Stack>
        <Grid2
          container
          pl={4}
          mt={5}
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
                      <Grid2
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
                              variant="body2"
                              sx={{
                                fontWeight: 590,
                                width: { xs: "100%" }
                              }}
                            >
                              {product.name}
                            </Typography>
                            <Stack flexDirection={"row"} gap={1}>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontSize: "0.75rem"
                                }}
                              >
                                {`£${product.price}`}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  fontSize: "0.75rem",
                                  color: "#aaa",
                                  textDecoration: "line-through"
                                }}
                              >
                                {`£${product.oldPrice}`}
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
                                  index < Math.floor(product.rating)
                                    ? "primary"
                                    : "disabled"
                                }
                              />
                            ))}
                          </Stack>
                        </Link>
                      </Grid2>
                    ))
                )
            : "No product found"}
        </Grid2>
      </Stack>
    </>
  )
}

export default FeaturedProducts
