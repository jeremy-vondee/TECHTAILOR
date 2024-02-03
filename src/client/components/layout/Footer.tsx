import {
    CopyrightRounded,
    FacebookRounded,
    Instagram,
    Twitter,
} from "@mui/icons-material"
import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import Logo from "../../assets/Logo.svg"

const Footer = () => {
    const theme = useTheme()
    return (
        <Box
            mt={20}
            pl={3}
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
            }}>
            <Grid
                container
                spacing={2}
                alignItems={"center"}
                color={theme.palette.text.secondary}
                sx={{
                    justifyContent: { xs: "center", sm: "flex-start" },
                    flexDirection: { xs: "column", sm: "row" },
                }}>
                <Grid item sm={4} md={3}>
                    <Box
                        component="img"
                        alt="logo"
                        sx={{
                            width: { xs: "160px", md: "240px" },
                            verticalAlign: "middle",
                        }}
                        src={Logo}
                    />
                </Grid>
                <Grid item sm={4} md={3}>
                    <Stack mt={3}>
                        <Typography variant="h5">COMPANY</Typography>
                        <Typography variant="body2">About us</Typography>
                        <Typography variant="body2">Payment Method</Typography>
                        <Typography variant="body2">
                            Terms and Conditions
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sm={4} md={3}>
                    <Stack mt={3}>
                        <Typography variant="h5">ODERS</Typography>
                        <Typography variant="body2">Support</Typography>
                        <Typography variant="body2">Return Policies</Typography>
                        <Typography variant="body2">
                            Delivery Information
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sm={4} md={3}>
                    <Stack mt={3}>
                        <Typography variant="h5">SOCIAL HANDLES</Typography>
                        <List>
                            <ListItem>
                                <Instagram fontSize="large" />
                                <FacebookRounded
                                    fontSize="large"
                                    sx={{
                                        marginLeft: "8px",
                                        marginRight: "8px",
                                    }}
                                />
                                <Twitter fontSize="large" />
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Grid>
            <List sx={{ marginTop: "32px" }}>
                <Divider
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        width: "90%",
                        margin: "auto",
                    }}
                />
                <ListItem
                    sx={{ justifyContent: "center" }}
                    alignItems={"center"}>
                    <CopyrightRounded sx={{ fontSize: "10px" }} />{" "}
                    <Typography
                        color={theme.palette.text.secondary}
                        variant="caption">
                        COPYRIGHT ALL RIGHTS RESERVED
                    </Typography>
                </ListItem>
            </List>
        </Box>
    )
}

export default Footer
