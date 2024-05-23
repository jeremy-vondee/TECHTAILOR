import { FC } from "react"
import { Link as routerLink, useParams } from "react-router-dom"
//*MUI importation
import { Box, Grid, Link, Stack, Typography, useTheme } from "@mui/material"
//*Icons importation
import AppleLogo from "../../assets/Apple.svg"
import PlaystationLogo from "../../assets/Playstation.svg"
import XboxLogo from "../../assets/Xbox.svg"
import SamsungLogo from "../../assets/Samsung.svg"
import DellLogo from "../../assets/Dell.svg"
import HpLogo from "../../assets/Hp.svg"
import LgLogo from "../../assets/Lg.svg"
import NintendoLogo from "../../assets/Nintendo.svg"
//* Fetch util importation
import { useProductStore } from "../store/useProductStore"
//* Layout importation
import Carousel from "./HeroCarousel"
import AddToCartButton from "./AddToCartButton"

const LandingPageBody: FC = () => {
    const theme = useTheme()
    const { product } = useParams<string>()
    const data = useProductStore((state) => state.data)

    return (
        <>
            <Box mt={{ xs: 14, sm: 18 }}>
                <Carousel />
                {/* //* Laptops section */}
                <Stack mt={5}>
                    <Stack
                        justifyContent={"center"}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: { xs: "8vh", sm: "10vh" },
                            verticalAlign: "middle",
                        }}>
                        <Typography
                            variant="subtitle1"
                            ml={3}
                            sx={{
                                fontSize: { xs: "24px", sm: "32px" },
                                fontWeight: "bolder",
                                color: theme.palette.text.secondary,
                            }}>
                            LAPTOPS
                        </Typography>
                    </Stack>
                    <Grid
                        container
                        pl={4}
                        mt={5}
                        gap={{ sm: 5, md: 3 }}
                        columnGap={{ xs: 3, sm: 5 }}>
                        {data !== null && data !== undefined ? (
                            Object.entries(data)
                                .filter(([key, _]) => key === "laptops")
                                .map(([key, val]) =>
                                    val
                                        .filter((_, index) => index < 4)
                                        .map((keys, index) => (
                                            <Grid
                                                item
                                                xs={5}
                                                md={3}
                                                sx={{
                                                    maxWidth: {
                                                        xs: "fit-content",
                                                        sm: "100%",
                                                    },
                                                }}>
                                                <Link
                                                    component={routerLink}
                                                    key={`${keys.name}+ ${index}`}
                                                    underline="none"
                                                    to={`/${keys.name}`}>
                                                    <Box
                                                        component="img"
                                                        alt={`${keys.name} image`}
                                                        src={keys.img}
                                                        sx={{
                                                            width: {
                                                                xs: "100%",
                                                                sm: "12.5rem",
                                                                lg: "18.75rem",
                                                            },
                                                            height: "10rem",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                    <Stack>
                                                        <Typography
                                                            sx={{
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}>
                                                            {keys.name}
                                                        </Typography>

                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}>
                                                            {`GH₵ ` +
                                                                keys.price}
                                                        </Typography>
                                                    </Stack>
                                                </Link>
                                                <AddToCartButton
                                                    productItem={keys}
                                                />
                                            </Grid>
                                        ))
                                )
                        ) : (
                            <Typography>Loading data</Typography>
                        )}
                    </Grid>
                </Stack>
                {/* //*Phones section */}
                <Stack mt={5}>
                    <Stack
                        justifyContent={"center"}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: { xs: "8vh", sm: "10vh" },
                            verticalAlign: "middle",
                        }}>
                        <Typography
                            variant="subtitle1"
                            ml={3}
                            sx={{
                                fontSize: { xs: "24px", sm: "32px" },
                                fontWeight: "bolder",
                                color: theme.palette.text.secondary,
                            }}>
                            PHONES
                        </Typography>
                    </Stack>
                    <Grid
                        container
                        pl={3}
                        mt={5}
                        gap={{ xs: 3, sm: 5, md: 3 }}
                        columnGap={{ sm: 5, md: 0 }}>
                        {data !== null && data !== undefined ? (
                            Object.entries(data)
                                .filter(([key, _]) => key === "phones")
                                .map(([key, val]) =>
                                    val
                                        .filter((_, index) => index < 4)
                                        .map((keys, index) => (
                                            <Grid
                                                item
                                                xs={5}
                                                md={3}
                                                sx={{
                                                    maxWidth: {
                                                        xs: "fit-content",
                                                        sm: "100%",
                                                    },
                                                }}>
                                                <Link
                                                    component={routerLink}
                                                    key={`${keys.name}+ ${index}`}
                                                    underline="none"
                                                    to={`/${keys.name}`}>
                                                    <Box
                                                        component="img"
                                                        alt={`${keys.name} image`}
                                                        src={keys.img}
                                                        sx={{
                                                            width: {
                                                                xs: "100%",
                                                                sm: "12.5rem",
                                                                lg: "18.75rem",
                                                            },
                                                            height: "10rem",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                    <Stack>
                                                        <Typography
                                                            sx={{
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}>
                                                            {keys.name}
                                                        </Typography>

                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}>
                                                            {`GH₵ ` +
                                                                keys.price}
                                                        </Typography>
                                                    </Stack>
                                                </Link>
                                                <AddToCartButton
                                                    productItem={keys}
                                                />
                                            </Grid>
                                        ))
                                )
                        ) : (
                            <Typography>Loading data</Typography>
                        )}
                    </Grid>
                </Stack>
                {/* //* Consoles section */}
                <Stack mt={5}>
                    <Stack
                        justifyContent={"center"}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: { xs: "8vh", sm: "10vh" },
                            verticalAlign: "middle",
                        }}>
                        <Typography
                            variant="subtitle1"
                            ml={3}
                            sx={{
                                fontSize: { xs: "24px", sm: "32px" },
                                fontWeight: "bolder",
                                color: theme.palette.text.secondary,
                            }}>
                            CONSOLES
                        </Typography>
                    </Stack>
                    <Grid
                        container
                        pl={3}
                        mt={5}
                        gap={{ sm: 5, md: 3 }}
                        columnGap={{ xs: 3, sm: 5, md: 0 }}>
                        {data !== null && data !== undefined ? (
                            Object.entries(data)
                                .filter(([key, _]) => key === "consoles")
                                .map(([key, val]) =>
                                    val
                                        .filter((_, index) => index < 4)
                                        .map((keys, index) => (
                                            <Grid
                                                item
                                                xs={5}
                                                md={3}
                                                sx={{
                                                    maxWidth: {
                                                        xs: "fit-content",
                                                        sm: "100%",
                                                    },
                                                }}>
                                                <Link
                                                    component={routerLink}
                                                    key={`${keys.name}+ ${index}`}
                                                    underline="none"
                                                    to={`/${keys.name}`}>
                                                    <Box
                                                        component="img"
                                                        alt={`${keys.name} image`}
                                                        src={keys.img}
                                                        sx={{
                                                            width: {
                                                                xs: "100%",
                                                                sm: "12.5rem",
                                                                lg: "18.75rem",
                                                            },
                                                            height: "10rem",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                    <Stack>
                                                        <Typography
                                                            sx={{
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}>
                                                            {keys.name}
                                                        </Typography>

                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}>
                                                            {`GH₵ ` +
                                                                keys.price}
                                                        </Typography>
                                                    </Stack>
                                                </Link>
                                                <AddToCartButton
                                                    productItem={keys}
                                                />
                                            </Grid>
                                        ))
                                )
                        ) : (
                            <Typography>Loading data</Typography>
                        )}
                    </Grid>
                </Stack>
                {/* //*SHOP BY BRANDS */}
                <Stack mt={8}>
                    <Stack
                        justifyContent={"center"}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: { xs: "8vh", sm: "10vh" },
                            verticalAlign: "middle",
                        }}>
                        <Typography
                            variant="subtitle1"
                            ml={3}
                            sx={{
                                fontSize: { xs: "24px", sm: "32px" },
                                fontWeight: "bolder",
                                color: theme.palette.text.secondary,
                            }}>
                            SHOP BY BRANDS
                        </Typography>
                    </Stack>
                    <Grid
                        container
                        alignItems={"center"}
                        gap={{ xs: 2, sm: 0 }}
                        mt={5}
                        sx={{
                            justifyContent: { xs: "center", sm: "flex-start" },
                            paddingLeft: { sm: "24px", md: "32px" },
                        }}>
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Dell logo"
                                    src={DellLogo}
                                    sx={{
                                        width: { xs: "70px", sm: "80px" },
                                        height: { xs: "70px", sm: "80px" },
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Hp logo"
                                    src={HpLogo}
                                    sx={{
                                        width: { xs: "70px", sm: "80px" },
                                        height: { xs: "70px", sm: "80px" },
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Xbox logo"
                                    src={XboxLogo}
                                    sx={{
                                        width: "80px",
                                        height: "80px",
                                        color: theme.palette.text.primary,
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Apple logo"
                                    src={AppleLogo}
                                    sx={{
                                        width: { xs: "70px", sm: "80px" },
                                        height: { xs: "70px", sm: "80px" },
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Playstation logo"
                                    src={PlaystationLogo}
                                    sx={{
                                        width: { xs: "70px", sm: "80px" },
                                        height: { xs: "70px", sm: "80px" },
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Lg logo"
                                    src={LgLogo}
                                    sx={{
                                        width: { xs: "100px", sm: "160px" },
                                        height: { xs: "100px", sm: "160px" },
                                        color: theme.palette.text.primary,
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Nintendo logo"
                                    src={NintendoLogo}
                                    sx={{
                                        width: { xs: "100px", sm: "160px" },
                                        height: { xs: "100px", sm: "160px" },
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            sx={{
                                maxWidth: { xs: "fit-content", sm: "30%" },
                            }}>
                            <Link>
                                <Box
                                    component="img"
                                    alt="Samsung logo"
                                    src={SamsungLogo}
                                    sx={{
                                        width: { xs: "100px", sm: "160px" },
                                        height: { xs: "100px", sm: "160px" },
                                    }}
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}

export default LandingPageBody
