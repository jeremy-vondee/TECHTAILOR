"use client"
import React, { FC, useState } from "react"
import { Box, Link, Modal, Stack, Typography, useTheme } from "@mui/material"
import NextLink from "next/link"
import GoogleIcon from "@mui/icons-material/Google"

const SignIn: FC = () => {
  const theme = useTheme()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Link
        onClick={handleOpen}
        underline="none"
        sx={{
          color: {
            xs: theme.palette.primary.main,
            sm: theme.palette.secondary.main,
            fontWeight: "bold"
          },
          marginTop: { xs: 2, md: 0 },
          cursor: "pointer"
        }}
      >
        Sign in
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: `${theme.palette.primary.main}`,
            borderRadius: "10px",
            p: 4
          }}
        >
          <Box
            component="img"
            alt="logo"
            sx={{
              width: { xs: "160px", md: "304px" }
            }}
            src={`/Logo.svg`}
          />
          <Typography
            sx={{
              color: theme.palette.secondary.main
            }}
            mb={3}
          >
            Sign in or create an account
          </Typography>
          <Link
            component={NextLink}
            href="/cart"
            underline="none"
            fontWeight={"bold"}
            p={1}
            sx={{
              color: theme.palette.secondary.main,
              backgroundColor: "#353935",
              borderRadius: "6px"
            }}
          >
            <Stack flexDirection={"row"} gap={1}>
              <GoogleIcon
                sx={{
                  color: theme.palette.secondary.main
                }}
              />
              <Typography>Continue with Google</Typography>
            </Stack>
          </Link>
        </Stack>
      </Modal>
    </>
  )
}

export default SignIn
