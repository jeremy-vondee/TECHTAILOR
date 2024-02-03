import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Link,
    List,
    ListItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import Logo from "../../assets/Logo2.svg"
import { Google, Home } from "@mui/icons-material"
import { Link as routerLink } from "react-router-dom"

const SignUpPage = () => {
    const theme = useTheme()

    return (
        <Stack>
            <Link component={routerLink} to="/">
                <Home fontSize="large" />
            </Link>
            <Box
                component="img"
                alt="logo"
                mt={-11}
                sx={{
                    width: { xs: "248px", sm: "400px", md: "640px" },
                    height: { xs: "104px", sm: "182px", md: "200px" },
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.text.secondary,
                    margin: "auto",
                    zIndex: -10,
                }}
                src={Logo}
            />
            <Stack
                alignItems={"center"}
                sx={{
                    marginTop: { sm: "-8vh", md: 0 },
                }}>
                <TextField
                    label="EMAIL"
                    type="email"
                    variant="standard"
                    margin="normal"
                    sx={{
                        width: { xs: "80vw", sm: "60vw", md: "50vw" },

                        "& .MuiFormLabel-root, &.MuiInput-underline": {
                            color: theme.palette.text.primary,
                        },
                    }}
                />
                <TextField
                    label="PASSWORD"
                    type="password"
                    variant="standard"
                    sx={{
                        width: { xs: "80vw", sm: "60vw", md: "50vw" },
                        "& .MuiFormLabel-root": {
                            color: theme.palette.text.primary,
                        },
                    }}
                />
                <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ width: { xs: "80vw", sm: "60vw", md: "50vw" } }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: theme.palette.text.primary,
                                }}
                            />
                        }
                        label="Remember password"
                        sx={{
                            "& .MuiTypography-root": {
                                fontSize: { xs: "0.563rem", sm: "1rem" },
                            },
                        }}
                    />
                    <Link
                        underline="none"
                        sx={{ fontSize: { xs: "0.563rem", sm: "1rem" } }}>
                        Forgot password?{" "}
                    </Link>
                </Stack>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        width: { md: "10vw" },
                        fontSize: "1rem",
                        fontWeight: "bolder",
                    }}>
                    SIGN IN
                </Button>
            </Stack>
            <List>
                <ListItem
                    sx={{
                        justifyContent: "center",
                    }}>
                    <Divider
                        sx={{
                            borderColor: theme.palette.primary.main,
                            width: "25vw",
                        }}
                    />
                    <Typography mr={1} ml={1}>
                        OR
                    </Typography>
                    <Divider
                        sx={{
                            borderColor: theme.palette.primary.main,
                            width: "25vw",
                        }}
                    />
                </ListItem>
                <ListItem
                    sx={{
                        justifyContent: "center",
                    }}>
                    <Link>
                        <Google fontSize="large" />
                    </Link>
                </ListItem>
                <ListItem
                    sx={{
                        justifyContent: "center",
                    }}>
                    <Typography>
                        Need an account?{" "}
                        <Link
                            component={routerLink}
                            to="/sign-in"
                            underline="none">
                            Sign in
                        </Link>
                    </Typography>
                </ListItem>
            </List>
        </Stack>
    )
}

export default SignUpPage
