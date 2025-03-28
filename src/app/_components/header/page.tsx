"use client"
import React, { FC, useState } from "react"
import {
  AppBar,
  Stack,
  Link,
  Toolbar,
  Box,
  ListItem,
  List,
  Drawer,
  Badge,
  Menu,
  MenuItem,
  IconButton
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import CartIcon from "@mui/icons-material/ShoppingCart"
import NextLink from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import SearchBar from "../searchBar/page"
import { useCartStore } from "@/store/cartStore"
import SignIn from "../sign-in/page"
import { useUser } from "@auth0/nextjs-auth0/client"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

const Header: FC = () => {
  const theme = useTheme()
  const { user } = useUser()

  const Categorize = [
    {
      path: "phones",
      link: "Phones"
    },
    {
      path: "laptops",
      link: "Laptops"
    },
    {
      path: "tvs",
      link: "TVs"
    },
    {
      path: "toys",
      link: "Toys"
    },
    {
      path: "securities",
      link: "Securities"
    },
    {
      path: "hardwares",
      link: "Hardwares"
    },
    {
      path: "accessories",
      link: "Accessories"
    },
    {
      path: "printers",
      link: "Printers"
    },
    {
      path: "acs",
      link: "Acs"
    },
    {
      path: "consoles",
      link: "Consoles"
    }
  ]

  const [openDrawer, setOpenDrawer] = useState(false)
  const handleDrawerToogle = () => {
    setOpenDrawer((prev) => !prev)
  }

  const cartList = useCartStore((state) => state.cartList)
  const cartCount = cartList.reduce((acc, current) => {
    return acc + current.quantity
  }, 0)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar elevation={0} sx={{ color: theme.palette.primary.main }}>
      <Toolbar
        sx={{
          justifyContent: "space-between"
        }}
      >
        <Link component={NextLink} href="/" underline="none">
          <Box
            component="img"
            alt="logo"
            sx={{
              width: { xs: "120px", sm: "144px", md: "304px" }
            }}
            src={`/Logo.svg`}
          />
        </Link>
        <Stack
          flexDirection="row"
          alignItems="center"
          alignContent="center"
          justifyContent="space-between"
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: { sm: 3, md: 8 }
          }}
        >
          <SearchBar />
          <Link
            component={NextLink}
            href="/cart"
            underline="none"
            fontWeight={"bold"}
            sx={{ color: theme.palette.secondary.main }}
          >
            <Badge
              badgeContent={cartCount === 0 ? null : cartCount}
              color="error"
            >
              <CartIcon />
            </Badge>
          </Link>
          {user ? (
            <>
              <IconButton
                aria-label="delete"
                onClick={handleClick}
                sx={{
                  color: theme.palette.secondary.main,
                  font: "large"
                }}
              >
                <AccountCircleIcon />
              </IconButton>
              {/* </Button> */}
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem>
                  <Link
                    component={NextLink}
                    href="/api/auth/logout"
                    underline="none"
                  >
                    Log out
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <SignIn />
          )}
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={3}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <Link
            component={NextLink}
            href="/cart"
            underline="none"
            fontWeight={"bold"}
            sx={{ color: theme.palette.secondary.main }}
          >
            <Badge
              badgeContent={cartCount === 0 ? null : cartCount}
              color="error"
            >
              <CartIcon />
            </Badge>
          </Link>
          <MenuIcon
            sx={{
              color: theme.palette.secondary.main
            }}
            onClick={handleDrawerToogle}
          />
          {/* //Mobile menu Drawer */}
          <Drawer
            variant="temporary"
            open={openDrawer}
            onClose={handleDrawerToogle}
            ModalProps={{
              keepMounted: true
            }}
            sx={{
              width: 240,
              display: { xs: "flex", sm: "none" }
            }}
          >
            <List
              sx={{
                padding: "16px 24px 0 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 200
              }}
            >
              {Categorize.map((keys) => (
                <ListItem divider key={keys.link}>
                  <Link
                    key={keys.link}
                    component={NextLink}
                    href={`/category/${keys.path}`}
                    pt={2}
                    underline="none"
                  >
                    {keys.link}
                  </Link>
                </ListItem>
              ))}
              <ListItem>
                <SignIn />
              </ListItem>
            </List>
          </Drawer>
        </Stack>
      </Toolbar>
      <Toolbar
        sx={{
          display: { xs: "flex", sm: "none" },
          marginBottom: 1
        }}
      >
        <SearchBar />
      </Toolbar>

      {/* Categorize Menu  */}
      <Toolbar
        sx={{
          justifyContent: "space-around",
          display: { xs: "none", sm: "flex" },
          gap: { sm: 1 }
        }}
      >
        {Categorize.map((keys) => (
          <Link
            key={keys.link}
            component={NextLink}
            href={`/category/${keys.path}`}
            underline="none"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "light"
            }}
          >
            {keys.link}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Header
