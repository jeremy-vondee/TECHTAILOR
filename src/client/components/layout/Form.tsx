import { zodResolver } from "@hookform/resolvers/zod"
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
import { useForm, Controller } from "react-hook-form"
import Schema, { SchemaType } from "../util/Schema"

type formProp = {
    buttonProp: ReactNode
    forgotPassword: boolean
}

const Form: FC<formProp> = ({ buttonProp, forgotPassword }) => {
    const theme = useTheme()

    type formData = {
        email: string
        password: string
        rememberPassword: boolean
    }

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
            rememberPassword: false,
        },
        resolver: zodResolver(Schema),
    })

    const handleFormSubmit = (values: SchemaType) => {
        return console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack
                alignItems={"center"}
                sx={{
                    marginTop: { sm: "-8vh", md: 0 },
                }}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <TextField
                            sx={{
                                width: { xs: "80vw", sm: "60vw", md: "50vw" },
                                "& .MuiFormLabel-root, &.MuiInput-underline": {
                                    color: theme.palette.text.primary,
                                },
                            }}
                            label="EMAIL"
                            type="email"
                            variant="standard"
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...field}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <TextField
                            sx={{
                                width: { xs: "80vw", sm: "60vw", md: "50vw" },
                                "& .MuiFormLabel-root, &.MuiInput-underline": {
                                    color: theme.palette.text.primary,
                                },
                            }}
                            label="PASSWORD"
                            type="password"
                            variant="standard"
                            margin="normal"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...field}
                        />
                    )}
                />

                <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ width: { xs: "80vw", sm: "60vw", md: "50vw" } }}>
                    <Controller
                        control={control}
                        name="rememberPassword"
                        render={({ field }) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            color: theme.palette.text.primary,
                                        }}
                                        {...field}
                                    />
                                }
                                label="Remember password"
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: {
                                            xs: "0.563rem",
                                            sm: "1rem",
                                        },
                                    },
                                }}
                            />
                        )}
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
                    type="submit"
                    sx={{
                        width: { md: "10vw" },
                        fontSize: "1rem",
                        fontWeight: "bolder",
                    }}>
                    {buttonProp}
                </Button>
            </Stack>
        </form>
    )
}

export default Form
