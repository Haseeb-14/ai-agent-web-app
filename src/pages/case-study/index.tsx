import {
  Box,
  Button,
  Container,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";
import StatsSection from "./stats-section";
import SliderSection from "./slider-section";
import aniccaBlack from "../../assets/anica-black-white.svg";
import { useNavigate } from "react-router-dom";

const buttonStyle: SxProps = {
  border: "1px solid white",
  boxShadow: "0 0 0 30px rgba(164, 143, 255, 0.12) inset",
  fontSize: "36px",
  borderRadius: "20px",
  width: "230px",
  marginTop: "15px",
};

const stylesBox: SxProps = {
  height: { xs: "680px", sm: "700px", md: "700px" },
};

const CaseStudy = () => {
  const navigate = useNavigate()
  return (
    <Box pt={9}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
        <Typography
          variant="h1"
          textAlign="center"
          color={"#ffffffde"}
          sx={{ mt: 4, mb: 4 }}
        >
          Case Studies
        </Typography>
        <Typography
          fontSize={"22px !important"}
          sx={{ color: "rgba(239, 237, 253, 0.7)", mb: 4 }}
          fontWeight={700}
          textAlign="center"
        >
          See how hundreds of companies drive growth with Anicca.bot.
        </Typography>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >
          <Button sx={buttonStyle} href='#btnn'>
            <Typography
              sx={{
                background: "#F4F0FF",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                fontSize: "14px",
                fontWeight: "700",
                width: "100%",
                textAlign : 'center'
              }}
            >
              Read The Stories
            </Typography>
          </Button>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ py: 10 }}>
          <StatsSection />
        </Box>
        <Box sx={stylesBox}  id='btnn'  >
          <SliderSection />
        </Box>
      </Container>
      <Box sx={{ m: { xs: 2, sm: 8 } }}>
        <Box
          sx={{
            p: 8,
            backgroundColor: "#4D2F8C",
            borderRadius: "30px",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Stack spacing={3} mt={{ xs: 3, md: 0 }}>
              <Typography variant="h2" color={"#ffffff"}>
                Ready To Learn More?
              </Typography>
              <Typography variant="h6" color={"#ffffff"}>
                Join hundreds of companies using Anicca.bot today.
              </Typography>
              <Box  onClick={()=>{navigate('/request-demo')}}>

              <Button sx={buttonStyle}>
                <Typography
                  sx={{
                    background: "#F4F0FF",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    fontSize: "14px",
                    fontWeight: "700",
                    width: "100%",
                  }}
                  >
                  Get a Demo
                </Typography>
              </Button>
                  </Box>
            </Stack>
            <img src={aniccaBlack} alt="" width={250} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CaseStudy;
