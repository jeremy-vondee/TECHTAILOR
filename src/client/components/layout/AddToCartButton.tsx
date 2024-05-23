import { FC, useState } from "react"
//*MUI importation
import { Button, Snackbar } from "@mui/material"
//* Fetch util importation
import { useAddToCartStore } from "../store/useAddToCartStore"
import { productDataType } from "../store/useProductStore"

interface item {
    productItem: productDataType
}
const AddToCartButton = ({ productItem }: item) => {
    const { addItemToCart } = useAddToCartStore()

    const onAddToCart = (productItem: productDataType) => {
        addItemToCart(productItem)
    }
    const [openSnackBar, setOpenSnackBar] = useState(false)

    const showSnackBar = () => {
        setOpenSnackBar(true)
    }

    const hideSnackBar = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return
        }
        setOpenSnackBar(false)
    }

    const addToCart = (productItem: productDataType) => {
        onAddToCart(productItem)
        showSnackBar()
    }

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    width: "fit-content",
                    marginTop: "8px",
                }}
                onClick={() => {
                    addToCart(productItem)
                }}>
                add to cart
            </Button>
            <Snackbar
                open={openSnackBar}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={3000}
                onClose={hideSnackBar}
                message="Added to cart"
                sx={{
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: "#388e3c",
                        width: "100%",
                    },
                }}
            />
        </>
    )
}

export default AddToCartButton
