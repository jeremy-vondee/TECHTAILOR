import {
    AppBar,
    InputAdornment,
    Stack,
    Link,
    TextField,
    Toolbar,
    Drawer,
    List,
    Divider,
    Box,
    ListItem,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import { ShoppingCart } from "@mui/icons-material"
import { Link as routerLink } from "react-router-dom"
import { useState } from "react"
import Logo from "../../assets/Logo.svg"

const Header = () => {
    const Categorize = [
        {
            path: "/phones",
            link: "Phones",
        },
        {
            path: "/laptops",
            link: "Laptops",
        },
        {
            path: "/tvs",
            link: "TVs",
        },
        {
            path: "/toys",
            link: "Toys",
        },
        {
            path: "/securitys",
            link: "Security",
        },
        {
            path: "/hardwares",
            link: "Hardware",
        },
        {
            path: "/accessories",
            link: "Accessories",
        },
        {
            path: "/printers",
            link: "Printers",
        },
        {
            path: "/consoles",
            link: "Consoles",
        },
    ]
    const theme = useTheme()

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawerToogle = () => {
        setOpenDrawer((prev) => !prev)
    }

    return (
        <>
            <AppBar elevation={0} sx={{ color: theme.palette.text.secondary }}>
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                    }}>
                    <Box
                        component="img"
                        alt="logo"
                        sx={{
                            width: { xs: "160px", md: "304px" },
                        }}
                        src={Logo}
                    />
                    {/* //Big screens */}
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        alignContent="center"
                        justifyContent="space-between"
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            gap: { sm: 3, md: 8 },
                        }}>
                        <TextField
                            placeholder="Search for products"
                            color="primary"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                    border: "hidden",
                                    borderRadius: "50px",
                                    width: {
                                        sm: "200px",
                                        md: "320px",
                                        lg: "560px",
                                    },
                                },
                            }}
                        />
                        <Link
                            component={routerLink}
                            to="/sign-in"
                            underline="none"
                            fontWeight={"bold"}
                            sx={{ color: theme.palette.text.secondary }}>
                            Sign in
                        </Link>
                        <ShoppingCart />
                    </Stack>
                    {/* //Smaller device width */}
                    <Stack
                        flexDirection={"row"}
                        gap={3}
                        sx={{ display: { xs: "flex", sm: "none" } }}>
                        <ShoppingCart />
                        <MenuIcon onClick={handleDrawerToogle} />
                        {/* //Mobile menu drawer */}
                        <Drawer
                            variant="temporary"
                            open={openDrawer}
                            onClose={handleDrawerToogle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                width: 240,
                                display: { xs: "flex", sm: "none" },
                            }}>
                            <List
                                sx={{
                                    padding: "16px 24px 0 24px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: 200,
                                }}>
                                {Categorize.map((keys) => (
                                    <ListItem divider>
                                        <Link
                                            key={keys.link}
                                            component={routerLink}
                                            to={keys.path}
                                            pt={2}
                                            underline="none">
                                            {keys.link}
                                        </Link>
                                    </ListItem>
                                ))}
                                <Link
                                    component={routerLink}
                                    to="/sign-in"
                                    underline="none"
                                    fontWeight={"bold"}
                                    mt={3}>
                                    Sign in
                                </Link>
                            </List>
                        </Drawer>
                    </Stack>
                </Toolbar>

                {/* //Categorize menu */}
                <Toolbar
                    sx={{
                        justifyContent: "space-around",
                        display: { xs: "none", sm: "flex" },
                        gap: { sm: 1 },
                    }}>
                    {Categorize.map((keys) => (
                        <Link
                            key={keys.link}
                            component={routerLink}
                            to={keys.path}
                            underline="none"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontFamily: "OpenSansLight",
                            }}>
                            {keys.link}
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
