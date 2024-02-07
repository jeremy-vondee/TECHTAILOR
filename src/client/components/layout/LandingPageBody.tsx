import { Box, Grid, Link, Stack, Typography, useTheme } from "@mui/material"
import AppleLogo from "../../assets/Apple.svg"
import PlaystationLogo from "../../assets/Playstation.svg"
import XboxLogo from "../../assets/Xbox.svg"
import SamsungLogo from "../../assets/Samsung.svg"
import DellLogo from "../../assets/Dell.svg"
import HpLogo from "../../assets/Hp.svg"
import LgLogo from "../../assets/Lg.svg"
import NintendoLogo from "../../assets/Nintendo.svg"

const LandingPageBody = () => {
    const theme = useTheme()
    return (
        <>
            <Stack
                justifyContent={"center"}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: "8vh",
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
            <Box ml={3} mt={3}>
                <Grid
                    container
                    // spacing={{ sm: 2, md: 0 }}
                    alignItems={"center"}
                    sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Dell logo"
                                src={DellLogo}
                                sx={{ width: "80px", height: "80px" }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Hp logo"
                                src={HpLogo}
                                sx={{ width: "80px", height: "80px" }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
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
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Apple logo"
                                src={AppleLogo}
                                sx={{ width: "80px", height: "80px" }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Playstation logo"
                                src={PlaystationLogo}
                                sx={{ width: "80px", height: "80px" }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Lg logo"
                                src={LgLogo}
                                sx={{
                                    width: "160px",
                                    height: "160px",
                                    color: theme.palette.text.primary,
                                }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Nintendo logo"
                                src={NintendoLogo}
                                sx={{ width: "160px", height: "160px" }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link>
                            <Box
                                component="img"
                                alt="Samsung logo"
                                src={SamsungLogo}
                                sx={{ width: "160px", height: "160px" }}
                            />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LandingPageBody
