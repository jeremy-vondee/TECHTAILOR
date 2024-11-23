import React from "react"
import {
  CopyrightRounded,
  FacebookRounded,
  Instagram,
  Twitter
} from "@mui/icons-material"
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material"
import Grid from "@mui/material/Grid2"
import { useTheme } from "@mui/material/styles"

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      mt={3}
      pl={3}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        color={theme.palette.secondary.main}
        sx={{
          justifyContent: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "row" }
        }}
      >
        <Grid size={{ sm: 4, md: 3 }}>
          <Link>
            <Box
              component="img"
              alt="logo"
              mt={3}
              sx={{
                width: { xs: "160px", md: "304px" },
                verticalAlign: "middle"
              }}
              src={`/Logo.svg`}
            />
          </Link>
        </Grid>
        <Grid size={{ sm: 4, md: 3 }}>
          <Stack mt={3}>
            <Typography variant="h5">COMPANY</Typography>
            <Typography variant="body1">About us</Typography>
            <Typography variant="body1">Payment Method</Typography>
            <Typography variant="body1">Terms and Conditions</Typography>
          </Stack>
        </Grid>
        <Grid size={{ sm: 4, md: 3 }}>
          <Stack mt={3}>
            <Typography variant="h5">ODERS</Typography>
            <Typography variant="body1">Support</Typography>
            <Typography variant="body1">Return Policies</Typography>
            <Typography variant="body1">Delivery Information</Typography>
          </Stack>
        </Grid>
        <Grid size={{ sm: 4, md: 3 }}>
          <Stack mt={3}>
            <Typography variant="h5">SOCIAL HANDLES</Typography>
            <List>
              <ListItem>
                <Instagram fontSize="large" />
                <FacebookRounded
                  fontSize="large"
                  sx={{
                    marginLeft: "8px",
                    marginRight: "8px"
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
            margin: "auto"
          }}
        />
        <ListItem sx={{ justifyContent: "center" }} alignItems={"center"}>
          <CopyrightRounded
            sx={{
              fontSize: "10px",
              color: theme.palette.secondary.main
            }}
          />{" "}
          <Typography color={theme.palette.secondary.main} variant="caption">
            COPYRIGHT ALL RIGHTS RESERVED
          </Typography>
        </ListItem>
      </List>
    </Box>
  )
}

export default Footer
