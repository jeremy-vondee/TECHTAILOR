//*MUI importation
import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
//*Icons importation
import Memory from "../../assets/Ram.svg"
import Cpu from "../../assets/Cpu.svg"
import Display from "../../assets/Display.svg"
import Hdd from "../../assets/Hdd.svg"
type carouselProps = {
    name: string
    img: string
    hdd: string
    display: string
    cpu: string
    ram: string
}
const Carousel = ({ img, name, hdd, display, cpu, ram }: carouselProps) => {
    const theme = useTheme()

    return (
        <>
            <Grid container pl={3}>
                {/* //*Hero Content */}
                <Grid
                    item
                    xs={12}
                    sm={6}
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
                        sx={{ fontSize: { sm: "1.5rem", md: "2.75rem" } }}>
                        {name}
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
                            sx={{ display: "flex", flexDirection: "row" }}>
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
                            <Typography>{hdd}</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            sx={{ display: "flex", flexDirection: "row" }}>
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
                            <Typography>{display}</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: { xs: 0, sm: "8px" },
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
                            <Typography>{cpu}</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: { xs: 0, sm: "8px" },
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
                            <Typography>{ram}</Typography>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            borderWidth: "2px",
                            borderColor: theme.palette.primary.main,
                            fontWeight: "bolder",
                            fontSize: "1.5rem",
                            maxWidth: "fit-content",
                            marginTop: "24px",
                        }}>
                        oder now
                    </Button>
                </Grid>
                {/* //*Hero Image */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ margin: { xs: "auto", sm: 0 } }}>
                    <Box
                        component="img"
                        alt={`${name} 'image'`}
                        src={img}
                        sx={{
                            width: {
                                xs: "290px",
                                sm: "300px",
                                md: "560px",
                            },
                            height: {
                                xs: "280px",
                                sm: "280px",
                                md: "480px",
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Carousel
