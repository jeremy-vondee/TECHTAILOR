import { FC, ReactNode } from "react"
import { Link as routerLink, useParams } from "react-router-dom"
//*MUI importation
import { Box, Button, Grid, Link, Typography, useTheme } from "@mui/material"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
//*Icons importation
import Memory from "../../assets/Ram.svg"
import Cpu from "../../assets/Cpu.svg"
import Display from "../../assets/Display.svg"
import Hdd from "../../assets/Hdd.svg"
//*Nuka carousel importation
import Carousel from "nuka-carousel"
//* Fetch util importation
import { useProductStore } from "../store/useProductStore"

type CustomControlPropType = {
    onClickHandler: () => void
    children: ReactNode
}

const HeroCarousel: FC = () => {
    const theme = useTheme()
    const data = useProductStore((state) => state.data)

    const CustomControlButton: FC<CustomControlPropType> = ({
        onClickHandler,
        children,
    }) => {
        return (
            <>
                <Button
                    onClick={onClickHandler}
                    sx={{
                        opacity: 0,
                        "&:hover": {
                            opacity: 1,
                        },
                    }}>
                    {children}
                </Button>
            </>
        )
    }

    return (
        <>
            <Carousel
                autoplay={true}
                wrapAround={true}
                renderBottomCenterControls={null}
                renderCenterLeftControls={({ previousSlide }) => (
                    <CustomControlButton onClickHandler={previousSlide}>
                        <ArrowBackIos />
                    </CustomControlButton>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <CustomControlButton onClickHandler={nextSlide}>
                        <ArrowForwardIos />
                    </CustomControlButton>
                )}>
                {data !== null && data !== undefined
                    ? Object.entries(data)
                          .filter(([key, _]) => key === "laptops")
                          .map(([key, val]) =>
                              val
                                  .filter((_, index) => index < 4)
                                  .map((keys) => (
                                      <Link
                                          component={routerLink}
                                          key={keys.name}
                                          underline="none"
                                          to={`/${keys.name}`}>
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
                                                      {keys.name}
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
                                                              flexDirection:
                                                                  "row",
                                                          }}>
                                                          <Box
                                                              component="img"
                                                              alt="Hdd"
                                                              src={Hdd}
                                                              sx={{
                                                                  width: "32px",
                                                                  height: "32px",
                                                                  marginRight:
                                                                      "4px",
                                                              }}
                                                          />
                                                          <Typography>
                                                              {
                                                                  keys.keySpecs
                                                                      .SSD
                                                              }
                                                          </Typography>
                                                      </Grid>
                                                      <Grid
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          md={5}
                                                          sx={{
                                                              display: "flex",
                                                              flexDirection:
                                                                  "row",
                                                          }}>
                                                          <Box
                                                              component="img"
                                                              alt="Display"
                                                              src={Display}
                                                              sx={{
                                                                  width: "32px",
                                                                  height: "32px",
                                                                  marginRight:
                                                                      "4px",
                                                              }}
                                                          />
                                                          <Typography>
                                                              {
                                                                  keys.keySpecs
                                                                      .Display
                                                              }
                                                          </Typography>
                                                      </Grid>
                                                      <Grid
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          md={6}
                                                          sx={{
                                                              display: "flex",
                                                              flexDirection:
                                                                  "row",
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
                                                                  marginRight:
                                                                      "4px",
                                                              }}
                                                          />
                                                          <Typography>
                                                              {
                                                                  keys.keySpecs
                                                                      .Processor
                                                              }
                                                          </Typography>
                                                      </Grid>
                                                      <Grid
                                                          item
                                                          xs={12}
                                                          sm={6}
                                                          md={6}
                                                          sx={{
                                                              display: "flex",
                                                              flexDirection:
                                                                  "row",
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
                                                                  marginRight:
                                                                      "4px",
                                                              }}
                                                          />
                                                          <Typography>
                                                              {
                                                                  keys.keySpecs
                                                                      .RAM
                                                              }
                                                          </Typography>
                                                      </Grid>
                                                  </Grid>
                                                  <Button
                                                      variant="contained"
                                                      size="large"
                                                      sx={{
                                                          borderWidth: "2px",
                                                          borderColor:
                                                              theme.palette
                                                                  .primary.main,
                                                          fontWeight: "bolder",
                                                          fontSize: "1.5rem",
                                                          maxWidth:
                                                              "fit-content",
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
                                                      margin: {
                                                          xs: "auto",
                                                          sm: 0,
                                                      },
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
                                                      alt={`${keys.name} 'image'`}
                                                      src={keys.img}
                                                      sx={{
                                                          width: "100%",
                                                          height: "100%",
                                                          objectFit: "contain",
                                                      }}
                                                  />
                                              </Grid>
                                          </Grid>
                                      </Link>
                                  ))
                          )
                    : ""}
            </Carousel>
        </>
    )
}

export default HeroCarousel
