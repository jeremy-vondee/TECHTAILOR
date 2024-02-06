import {
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Stack,
    TextField,
    useTheme,
} from "@mui/material"
import { FC, ReactNode, useState } from "react"

type formProp = {
    buttonProp: ReactNode
    forgotPassword: boolean
}

const Form: FC<formProp> = ({ buttonProp, forgotPassword }) => {
    const theme = useTheme()
    type formData = {
        user: {
            email: string
            password: string
        }
        error: boolean
    }
    const [formData, setFormData] = useState<formData>({
        user: {
            email: "",
            password: "",
        },
        error: false,
    })

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setFormData((prev) => ({
            ...prev,
            user: { ...prev.user, email: value },
        }))
    }

    const handleFormSubmit = () => {
        const testEmail = formData.user.email
        const emailRegex = /^[\w-\.]+@[\[w-]\.]+\[w-]{2,4}$/

        emailRegex.test(testEmail) ? console.log("true") : console.log("false")
    }
    return (
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
                value={formData.user.email}
                onChange={handleEmailChange}
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
                {forgotPassword === true ? (
                    <Link
                        underline="none"
                        sx={{ fontSize: { xs: "0.563rem", sm: "1rem" } }}>
                        Forgot password?{" "}
                    </Link>
                ) : (
                    ""
                )}
            </Stack>
            <Button
                variant="contained"
                size="large"
                onClick={handleFormSubmit}
                sx={{
                    width: { md: "10vw" },
                    fontSize: "1rem",
                    fontWeight: "bolder",
                }}>
                {buttonProp}
            </Button>
        </Stack>
    )
}

export default Form
