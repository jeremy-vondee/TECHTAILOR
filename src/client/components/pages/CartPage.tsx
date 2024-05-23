import { Link as routerLink } from "react-router-dom"
import { FC } from "react"
//*Icon importation
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
//*MUI importation
import {
    Box,
    Button,
    Divider,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/material"
import Header from "../layout/Header"
//* Fetch util importation
import { useAddToCartStore } from "../store/useAddToCartStore"
import { productDataType } from "../store/useProductStore"

const CartPage: FC = () => {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
    } = useAddToCartStore()
    const onIncreaseQuantity = (item: productDataType) => {
        increaseQuantity(item)
    }
    const onDecreaseQuantity = (item: productDataType) => {
        decreaseQuantity(item)
    }
    const onRemoveItemFromCart = (item: productDataType) => {
        removeItemFromCart(item)
    }

    return (
        <>
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
                            Browse our categories and discover our best deals!
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
                        gap={{ xs: 3, md: 2 }}
                        sx={{
                            backgroundColor: "#F1F1F2",
                            height: "100vh",
                        }}>
                        <Grid
                            item
                            xs={11}
                            md={7}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                            }}>
                            <Typography pl={3} mt={2} sx={{ color: "#3d3b3b" }}>
                                Shopping Cart
                            </Typography>
                            {cartItems.map((item, index) => {
                                return (
                                    <Grid
                                        container
                                        mt={1}
                                        key={`${item.name}-${index}`}>
                                        <Grid
                                            item
                                            pl={3}
                                            sm={3}
                                            md={3}
                                            xs={5}
                                            alignItems={"center"}
                                            sx={{ width: "fit-content" }}>
                                            <Box
                                                component="img"
                                                alt={`${item.name} image`}
                                                src={item.img}
                                                sx={{
                                                    width: {
                                                        xs: "3rem",
                                                        sm: "3.5rem",
                                                        md: "2.5rem",
                                                        lg: "5rem",
                                                    },
                                                    height: {
                                                        lg: "5rem",
                                                    },
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Grid>
                                        <Grid
                                            display={"flex"}
                                            flexDirection={{
                                                xs: "column",
                                                sm: "row",
                                            }}
                                            justifyContent={"space-between"}
                                            item
                                            xs={7}
                                            sm={8}>
                                            <Typography
                                                sx={{
                                                    fontWeight: 590,
                                                }}>
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                mt={{ xs: 1, sm: 0 }}
                                                sx={{
                                                    fontWeight: "bold",
                                                }}>
                                                {`GH₵ ` + item.price}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            md={12}
                                            mt={{ xs: 2, sm: 0 }}
                                            mb={2}
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}>
                                            <Button
                                                variant="text"
                                                startIcon={
                                                    <DeleteIcon
                                                        sx={{
                                                            fontSize: 40,
                                                            marginLeft: "24px",
                                                        }}
                                                    />
                                                }
                                                onClick={() =>
                                                    onRemoveItemFromCart(item)
                                                }>
                                                Remove
                                            </Button>
                                            <Stack flexDirection={"row"}>
                                                <Button
                                                    variant="outlined"
                                                    sx={{
                                                        padding: "8px",
                                                        minWidth: "10px",
                                                        height: "24px",
                                                        fontWeight: "bold",
                                                    }}
                                                    onClick={() =>
                                                        onIncreaseQuantity(item)
                                                    }>
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
                                                        fontWeight: "bold",
                                                    }}
                                                    onClick={() =>
                                                        onDecreaseQuantity(item)
                                                    }>
                                                    -
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid
                            item
                            xs={11}
                            md={4}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                                height: "fit-content",
                            }}>
                            <Typography ml={2} mt={2} sx={{ color: "#3d3b3b" }}>
                                Cart Summary
                            </Typography>
                            <Divider sx={{ width: "96%", margin: "auto" }} />
                            <Stack flexDirection={"row"} ml={2} mt={1} mb={1}>
                                <Typography mr={2}>Subtotal</Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                    }}>
                                    {`GH₵ ` +
                                        cartItems.reduce((acc, current) => {
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
                                    marginBottom: "16px",
                                    marginLeft: "16px",
                                }}>
                                Proceed to Checkout
                            </Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}
export default CartPage
