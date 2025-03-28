"use client"
import React from "react"
import {
  Box,
  Button,
  Divider,
  Grid2,
  Link,
  Stack,
  Typography
} from "@mui/material"
import Header from "../_components/header/page"
import { useCartStore } from "@/store/cartStore"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import DeleteIcon from "@mui/icons-material/Delete"
import NextLink from "next/link"

const Cart = () => {
  const cartList = useCartStore((state) => state.cartList)
  const increaseItemQuantity = useCartStore(
    (state) => state.increaseItemQuantity
  )
  const decreaseItemQuantity = useCartStore(
    (state) => state.decreaseItemQuantity
  )
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart)
  return (
    <>
      <Header />

      {cartList.length === 0 ? (
        <>
          <Stack alignItems={"center"} pt={{ xs: 18, sm: 18, md: 24 }}>
            <ShoppingCartIcon sx={{ fontSize: "6rem" }} />
            <Typography sx={{ fontWeight: "bold" }}>Your cart empty</Typography>
            <Typography variant="body2">
              Browse our categories and discover our best deals!
            </Typography>
            <Link component={NextLink} href="/">
              <Button
                variant="contained"
                sx={{
                  marginTop: "2rem",
                  fontWeight: "bold"
                }}
              >
                Start shopping
              </Button>
            </Link>
          </Stack>
        </>
      ) : (
        <Grid2 container pt={{ xs: 18, md: 24 }} pl={3} gap={{ xs: 1, md: 2 }}>
          <Grid2
            size={{ xs: 11, md: 7 }}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              height: "max-content"
            }}
          >
            <Typography pl={3} mt={2} sx={{ color: "#3d3b3b" }}>
              Shopping Cart
            </Typography>
            <Divider sx={{ width: "96%", margin: "auto" }} />
            {cartList.map((item, index) => {
              return (
                <Grid2 container mt={1} key={`${item.name}-${index}`}>
                  <Grid2
                    pl={3}
                    size={{ sm: 3, md: 3, xs: 5 }}
                    alignItems={"center"}
                    sx={{ width: "fit-content" }}
                  >
                    <Box
                      component="img"
                      alt={`${item.name} image`}
                      src={item.img}
                      sx={{
                        width: {
                          xs: "3rem",
                          sm: "3.5rem",
                          md: "2.5rem",
                          lg: "5rem"
                        },
                        height: {
                          lg: "5rem"
                        },
                        objectFit: "contain"
                      }}
                    />
                  </Grid2>
                  <Grid2
                    display={"flex"}
                    flexDirection={{
                      xs: "column",
                      sm: "row"
                    }}
                    justifyContent={"space-between"}
                    size={{ sm: 8, xs: 7 }}
                  >
                    <Typography
                      ml={{ xs: 1, sm: 0 }}
                      sx={{
                        fontWeight: 590
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      mt={{ xs: 0.5, sm: 0 }}
                      ml={{ xs: 1, sm: 0 }}
                      sx={{
                        fontWeight: "bold"
                      }}
                    >
                      {`£ ${item.price}`}
                    </Typography>
                  </Grid2>
                  <Grid2
                    size={{ md: 12, xs: 12 }}
                    mt={{ xs: 2, sm: 0 }}
                    mb={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <Button
                      variant="text"
                      startIcon={
                        <DeleteIcon
                          sx={{
                            fontSize: 40,
                            marginLeft: "24px"
                          }}
                        />
                      }
                      onClick={() => removeItemFromCart(item.name)}
                    >
                      Remove
                    </Button>
                    <Stack flexDirection={"row"}>
                      <Button
                        variant="outlined"
                        sx={{
                          padding: "8px",
                          minWidth: "10px",
                          height: "24px",
                          fontWeight: "bold"
                        }}
                        onClick={() => increaseItemQuantity(item.name)}
                      >
                        +
                      </Button>
                      <Typography ml={3} mr={3}>
                        {item.quantity}
                      </Typography>

                      <Button
                        variant="outlined"
                        sx={{
                          padding: "8px",
                          minWidth: "10px",
                          height: "24px",
                          marginRight: "2rem",
                          fontWeight: "bold"
                        }}
                        onClick={() => decreaseItemQuantity(item.name)}
                      >
                        -
                      </Button>
                    </Stack>
                  </Grid2>
                </Grid2>
              )
            })}
          </Grid2>
          <Grid2
            size={{ md: 4, xs: 11 }}
            mt={{ xs: 3, sm: 0 }}
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              height: "fit-content"
            }}
          >
            <Typography ml={2} mt={2} sx={{ color: "#3d3b3b" }}>
              Cart Summary
            </Typography>
            <Divider sx={{ width: "96%", margin: "auto" }} />
            <Stack flexDirection={"row"} ml={2} mt={2} mb={2}>
              <Typography mr={2}>Subtotal</Typography>
              <Typography
                sx={{
                  fontWeight: "bold"
                }}
              >
                {`£ ${cartList.reduce((acc, current) => {
                  return acc + current.price * current.quantity
                }, 0)}`}
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                marginBottom: "16px",
                marginLeft: "16px"
              }}
            >
              <Link
                href="/checkout"
                underline="none"
                component={NextLink}
                sx={{ color: "#fff" }}
              >
                Go to Checkout
              </Link>
            </Button>
          </Grid2>
        </Grid2>
      )}
    </>
  )
}

export default Cart
