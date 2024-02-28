//*MUI importation
import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
//*Icons importation
import Memory from "../../assets/Ram.svg"
import Cpu from "../../assets/Cpu.svg"
import Display from "../../assets/Display.svg"
import Hdd from "../../assets/Hdd.svg"
//*Nuka carousel importation
import Carousel from "nuka-carousel"

import { productType } from "../hook/useFetch"
type carouselProps = {
    fetchRes: {
        [key: string]: productType[]
    } | null
}

const HeroCarousel = ({ fetchRes }: carouselProps) => {
    const theme = useTheme()

    return (
        <>
            <Carousel autoplay={true} wrapAround={true}>
                {fetchRes !== null && fetchRes !== undefined
                    ? fetchRes?.Laptop?.filter((_, index) => index < 4).map(
                          (key: productType) => (
                              <Grid
                                  container
                                  mt={{ md: 7 }}
                                  flexDirection={{
                                      xs: "column-reverse",
                                      sm: "row",
                                  }}>
                                  <Grid
                                      item
                                      xs={12}
                                      sm={7}
                                      pl={8}
                                      sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "center",
                                      }}>
                                      <Typography
                                          variant="h2"
                                          sx={{
                                              fontSize: {
                                                  xs: "2.7rem",
                                                  sm: "1.5rem",
                                                  md: "3.75rem",
                                              },
                                          }}>
                                          NEW ARRIVAL
                                      </Typography>
                                      <Typography
                                          variant="h5"
                                          mt={3}
                                          sx={{
                                              fontSize: {
                                                  xs: "1.75rem",
                                                  sm: "1.5rem",
                                                  md: "2.75rem",
                                              },
                                          }}>
                                          {key.name}
                                      </Typography>
                                      <Grid
                                          container
                                          mt={1}
                                          sx={{
                                              flexDirection: "row",
                                              width: "fit-content",
                                          }}>
                                          <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              md={6}
                                              sx={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                              }}>
                                              <Box
                                                  component="img"
                                                  alt="Hdd"
                                                  src={Hdd}
                                                  sx={{
                                                      width: "32px",
                                                      height: "32px",
                                                      marginRight: "4px",
                                                  }}
                                              />
                                              <Typography>
                                                  {key.keySpecs.SSD}
                                              </Typography>
                                          </Grid>
                                          <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              md={5}
                                              sx={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                              }}>
                                              <Box
                                                  component="img"
                                                  alt="Display"
                                                  src={Display}
                                                  sx={{
                                                      width: "32px",
                                                      height: "32px",
                                                      marginRight: "4px",
                                                  }}
                                              />
                                              <Typography>
                                                  {key.keySpecs.Display}
                                              </Typography>
                                          </Grid>
                                          <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              md={6}
                                              sx={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  marginTop: {
                                                      xs: 0,
                                                      sm: "8px",
                                                  },
                                              }}>
                                              <Box
                                                  component="img"
                                                  alt="Cpu"
                                                  src={Cpu}
                                                  sx={{
                                                      width: "32px",
                                                      height: "32px",
                                                      marginRight: "4px",
                                                  }}
                                              />
                                              <Typography>
                                                  {key.keySpecs.Processor}
                                              </Typography>
                                          </Grid>
                                          <Grid
                                              item
                                              xs={12}
                                              sm={6}
                                              md={6}
                                              sx={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  marginTop: {
                                                      xs: 0,
                                                      sm: "8px",
                                                  },
                                              }}>
                                              <Box
                                                  component="img"
                                                  alt="Dell logo"
                                                  src={Memory}
                                                  sx={{
                                                      width: "32px",
                                                      height: "32px",
                                                      marginRight: "4px",
                                                  }}
                                              />
                                              <Typography>
                                                  {key.keySpecs.RAM}
                                              </Typography>
                                          </Grid>
                                      </Grid>
                                      <Button
                                          variant="contained"
                                          size="large"
                                          sx={{
                                              borderWidth: "2px",
                                              borderColor:
                                                  theme.palette.primary.main,
                                              fontWeight: "bolder",
                                              fontSize: "1.5rem",
                                              maxWidth: "fit-content",
                                              marginTop: "24px",
                                          }}>
                                          oder now
                                      </Button>
                                  </Grid>
                                  <Grid
                                      item
                                      xs={12}
                                      sm={5}
                                      sx={{
                                          margin: { xs: "auto", sm: 0 },
                                          width: {
                                              xs: "100%",
                                              sm: "12.5rem",
                                              md: "25rem",
                                          },
                                          height: {
                                              xs: "280px",
                                              sm: "280px",
                                              md: "22.5rem",
                                          },
                                      }}>
                                      <Box
                                          component="img"
                                          alt={`${key.name} 'image'`}
                                          src={key.img}
                                          sx={{
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "contain",
                                          }}
                                      />
                                  </Grid>
                              </Grid>
                          )
                      )
                    : ""}
            </Carousel>
        </>
    )
}

export default HeroCarousel
