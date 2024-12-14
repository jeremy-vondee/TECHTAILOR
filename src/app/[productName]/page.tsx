"use client"
import React, { use, useEffect, useMemo, useState } from "react"
import { useProductStore } from "@/store/productStore"

import Header from "../_components/header/page"
import {
  Box,
  Button,
  Grid2,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme
} from "@mui/material"
import Footer from "../_components/footer/page"
import StarRateIcon from "@mui/icons-material/StarRate"
import NextLink from "next/link"
import { useCartStore } from "@/store/cartStore"

interface ProductPageProps {
  params: Promise<{ productName: string }>
}

interface RandomProductDataProp {
  name: string
  brand: string
  price: number
  oldPrice: number
  keySpecs: {
    [key: string]: string[]
  }
  fullSpecs: string
  img: string
  quantity: number
  rating: number
}

type RandomProductArrayProp = RandomProductDataProp[]

const ProductPage = ({ params }: ProductPageProps) => {
  const { productName } = use(params)
  const decodedProductName = decodeURIComponent(productName)

  const { products, isLoading, error } = useProductStore()

  const addItemToCart = useCartStore((state) => state.addItemToCart)

  const [randomProducts, setRandomProducts] = useState<RandomProductArrayProp>(
    []
  )

  const [randomDate, setRandomDate] = useState<string>("")

  const theme = useTheme()
  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(new Date())

  const foundProduct = products
    ? Object.values(products)
        .flatMap((productList) => productList)
        .find((product) => product?.name === decodedProductName)
    : null

  const filteredProducts = useMemo(() => {
    if (products) {
      return Object.values(products)
        .flat()
        .filter(
          (product): product is RandomProductDataProp =>
            product !== null && product.name !== decodedProductName
        )
    }
    return []
  }, [products, decodedProductName])
  useEffect(() => {
    if (filteredProducts.length > 0) {
      const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random())
      setRandomProducts(shuffled.slice(0, 4))
    }

    const currentDate = new Date()
    const randomDays = Math.floor(Math.random() * 3) + 3 // Random number between 3 and 5
    const futureDate = new Date(
      currentDate.getTime() + randomDays * 24 * 60 * 60 * 1000
    )

    const formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    })

    setRandomDate(formatter.format(futureDate))
  }, [filteredProducts])

  if (isLoading) return <>loading</>

  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Header />

      {foundProduct && (
        <>
          <Grid2
            container
            mt={{ xs: 18, sm: 19, md: 26 }}
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
                    {`£ ${foundProduct.price}`}
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
                  mt={1}
                  variant="caption"
                  sx={{
                    fontSize: "0.875rem"
                  }}
                >
                  {`Estimated between ${currentDate} to ${randomDate}`}
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
                  onClick={() => addItemToCart(foundProduct)}
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
            <Grid2 mt={4}>
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
              <TableContainer>
                <Table
                  sx={{
                    marginLeft: 3,
                    marginTop: 4,
                    marginBottom: 2,
                    maxWidth: "max-content"
                  }}
                >
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography>Brand</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          ml={1}
                          sx={{
                            fontWeight: "bold"
                          }}
                        >
                          {foundProduct.brand}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    {Object.entries(foundProduct.keySpecs).map(
                      ([key, values]) => (
                        <TableRow key={key}>
                          <TableCell>
                            <Typography>{key}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fontWeight: "bold"
                              }}
                            >
                              {values}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack mt={3} ml={3} mr={4}>
                <Typography>{foundProduct.fullSpecs}</Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </>
      )}
      {randomProducts && (
        <>
          <Stack
            justifyContent={"center"}
            mt={4}
            mb={3}
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
              YOU MAY ALSO LIKE
            </Typography>
          </Stack>
          <Grid2 container>
            {randomProducts.flatMap((product) => (
              <Grid2
                key={product.name}
                size={{ xs: 5, sm: 4, md: 3 }}
                flexDirection={"row"}
                ml={3}
                mb={3}
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
            ))}{" "}
          </Grid2>
        </>
      )}
      <Footer />
    </>
  )
}

export default ProductPage
