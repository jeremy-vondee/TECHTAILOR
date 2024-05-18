import { Link as routerLink } from "react-router-dom"
import { FC } from "react"
import { useAddToCartStore } from "../store/useAddToCartStore"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {
    Box,
    Button,
    Divider,
    Grid,
    Link,
    Paper,
    Stack,
    Typography,
} from "@mui/material"
import Header from "../layout/Header"
import { productDataType } from "../store/useProductStore"

const CartPage: FC = () => {
    const { cartItems, increaseQuantity, decreaseQuantity } =
        useAddToCartStore()
    const onIncreaseQuantity = (item: productDataType) => {
        increaseQuantity(item)
    }
    const onDecreaseQuantity = (item: productDataType) => {
        decreaseQuantity(item)
    }
    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    backgroundColor: "#F1F1F2",
                    height: "100vh",
                }}>
                <Header />
                {cartItems.length === 0 ? (
                    <>
                        <Stack
                            alignItems={"center"}
                            pt={{ xs: 14, sm: 18, md: 24 }}>
                            <ShoppingCartIcon sx={{ fontSize: "6rem" }} />
                            <Typography sx={{ fontWeight: "bold" }}>
                                Your cart empty
                            </Typography>
                            <Typography variant="body2">
                                Browse our categories and discover our best
                                deals!
                            </Typography>
                            <Link component={routerLink} to="/">
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginTop: "2rem",
                                        fontWeight: "bold",
                                    }}>
                                    Start shopping
                                </Button>
                            </Link>
                        </Stack>
                    </>
                ) : (
                    <>
                        <Grid
                            container
                            pt={{ xs: 14, sm: 18, md: 24 }}
                            pl={3}
                            gap={{ md: 2 }}>
                            <Grid
                                item
                                md={7}
                                key={cartItems.length}
                                sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                }}>
                                <Typography pl={3} sx={{ fontSize: "2rem" }}>
                                    Shopping cart
                                </Typography>
                                <Divider
                                    sx={{ width: "96%", margin: "auto" }}
                                />
                                {cartItems.map((item, index) => {
                                    return (
                                        <Grid container mt={1}>
                                            <Grid
                                                item
                                                pl={3}
                                                md={3}
                                                key={`${item.name}-${index}`}
                                                alignItems={"center"}>
                                                <Box
                                                    component="img"
                                                    alt={`${item.name} image`}
                                                    src={item.img}
                                                    sx={{
                                                        width: {
                                                            xs: "100%",
                                                            sm: "12.5rem",
                                                            md: "2.5rem",
                                                            lg: "5rem",
                                                        },
                                                        height: { lg: "5rem" },
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item md={7}>
                                                <Typography
                                                    sx={{
                                                        fontSize: "1.5rem",
                                                    }}>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item md={2}>
                                                <Typography
                                                    sx={{
                                                        fontSize: "1.5rem",
                                                    }}>
                                                    {item.price}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                }}>
                                                <Button
                                                    variant="text"
                                                    startIcon={
                                                        <DeleteIcon
                                                            sx={{
                                                                fontSize: 40,
                                                            }}
                                                        />
                                                    }
                                                    sx={{ fontSize: "1.5rem" }}>
                                                    Remove
                                                </Button>
                                                <Stack flexDirection={"row"}>
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            padding: "8px",
                                                            minWidth: "10px",
                                                            height: "24px",
                                                        }}
                                                        onClick={() =>
                                                            onIncreaseQuantity(
                                                                item
                                                            )
                                                        }>
                                                        <AddIcon />
                                                    </Button>
                                                    <Typography ml={3} mr={3}>
                                                        {item.quantity}
                                                    </Typography>

                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            padding: "8px",
                                                            minWidth: "10px",
                                                            height: "24px",
                                                            marginRight: "2rem",
                                                            marginleft: "2rem",
                                                        }}
                                                        onClick={() =>
                                                            onDecreaseQuantity(
                                                                item
                                                            )
                                                        }>
                                                        <RemoveIcon />
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Grid
                                item
                                md={4}
                                sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                    height: "fit-content",
                                }}>
                                <Typography ml={2} sx={{ fontSize: "2rem" }}>
                                    Cart Summary
                                </Typography>
                                <Divider
                                    sx={{ width: "96%", margin: "auto" }}
                                />
                                <Stack flexDirection={"row"} ml={2} mb={1}>
                                    <Typography mr={2}>Subtotal</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                        }}>
                                        {cartItems.reduce((acc, current) => {
                                            return (
                                                acc +
                                                current.price * current.quantity
                                            )
                                        }, 0)}
                                    </Typography>
                                </Stack>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginBottom: "8px",
                                        marginLeft: "16px",
                                    }}>
                                    Checkout
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Paper>
        </>
    )
}
export default CartPage
