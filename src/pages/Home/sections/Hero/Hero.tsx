import { Box, Container, Grid, styled, Typography } from "@mui/material"
import avatar from "../../../../assets/imagens/avatar.jpeg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const Styledhero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height:"100vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up(`xs`)]: { // <= mobile
            
            paddingTop:"100px"
        },
        [theme.breakpoints.up(`md`)]: { // >= mobile
           
            paddingTop:"0px"
        }
    }))

    const StyledImg = styled("img")(({ theme })=> ({
        width: "75%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`
     }))

    return(
        <>                
          <Styledhero>
             <Container maxWidth="lg">  
                <Grid  container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"100%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={avatar}/>
                            </Box>
                        </Box>
                      
                    </Grid >
                    <Grid  item xs={12} md={7}>
                        <Typography color=" primary.contrastText" variant="h1" textAlign="center" pb={2}>Wellington Feliciano</Typography>
                        <Typography color=" primary.contrastText" variant="h2" textAlign="center">I`m a Software Enginer</Typography>
                       <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <FileDownloadIcon/>
                                    <Typography>
                                        Dowload do CV
                                    </Typography>    
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <MailOutlineIcon/>    
                                    <Typography>
                                        Contact me 
                                    </Typography>
                                </StyledButton>
                            </Grid>
                       </Grid>
                      
                       
                    </Grid >        
                </Grid >
             </Container>                   
          </Styledhero>
                   
                
        </>
    )

}

export default Hero