"use client"
import React, { use } from "react"
import Header from "@/app/_components/header/page"
import { Box, Grid2, Link, Stack, Typography } from "@mui/material"
import NextLink from "next/link"
import { useProductStore } from "@/store/productSotre"
import StarRateIcon from "@mui/icons-material/StarRate"
import Footer from "@/app/_components/footer/page"
import ProductsSkeleton from "../loading"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

const Category = ({ params }: CategoryPageProps) => {
  const { categoryId } = use(params)
  const { products, isLoading, error } = useProductStore()

  const productLength = Object.entries(products).filter(
    ([category]) => category === categoryId
  ).length

  if (isLoading) return <ProductsSkeleton count={productLength} />

  if (error) return <div>Error: {error.message}</div>

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
        {products !== null
          ? Object.entries(products)
              .filter(([category]) => category === categoryId)
              .flatMap(([, categoryProducts]) =>
                Object.entries(categoryProducts ?? {}).map(([, product]) => (
                  <Grid2
                    key={product.name}
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
          : ""}
      </Grid2>
      <Footer />
    </>
  )
}

export default Category
