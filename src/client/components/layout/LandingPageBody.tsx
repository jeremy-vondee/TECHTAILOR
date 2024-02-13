//*MUI importation
import {
    Box,
    Button,
    Grid,
    Link,
    List,
    ListItem,
    Stack,
    Typography,
    useTheme,
} from "@mui/material"
//*Icons importation
import AppleLogo from "../../assets/Apple.svg"
import PlaystationLogo from "../../assets/Playstation.svg"
import XboxLogo from "../../assets/Xbox.svg"
import SamsungLogo from "../../assets/Samsung.svg"
import DellLogo from "../../assets/Dell.svg"
import HpLogo from "../../assets/Hp.svg"
import LgLogo from "../../assets/Lg.svg"
import NintendoLogo from "../../assets/Nintendo.svg"
import pic from "../../assets/alienware-m16.png"

import Carousel from "./Carousel"

const LandingPageBody = () => {
    const theme = useTheme()
    return (
        <>
            <Box mt={18}>
                <Carousel
                    img={pic}
                    name="Alienware M16"
                    hdd="512 GB"
                    display="16 inch"
                    cpu="13th Gen Intel Core i7"
                    ram="16 GB"
                />

                {/* //*SHOP BY BRANDS */}
                <Stack
                    justifyContent={"center"}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: "10vh",
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
                    mt={4}
                    sx={{
                        justifyContent: { xs: "center", sm: "flex-start" },
                        paddingLeft: { sm: "24px" },
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
            </Box>
        </>
    )
}

export default LandingPageBody
