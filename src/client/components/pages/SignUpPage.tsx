//*Router link
import { Link as routerLink } from "react-router-dom"
//*MUI importation
import {
    Box,
    Divider,
    Link,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { Google, Home } from "@mui/icons-material"

import Logo from "../../assets/Logo2.svg"
import Form from "../layout/Form"

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
                    height: { xs: "104px", sm: "182px", md: "144px" },
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.text.secondary,
                    margin: "auto",
                    zIndex: -10,
                }}
                src={Logo}
            />
            <Form buttonProp="Sign up" forgotPassword={false} />
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
                        Already have an account?{" "}
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
