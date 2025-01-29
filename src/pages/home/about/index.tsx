import React from "react";
import {
  Box,
  Container,
  SxProps,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import WorldImg from "../../../assets/world.svg";
import { useNavigate } from "react-router-dom";
import SliderSection from "../slider-section";

const stylesBox: SxProps = {
  height: { xs: "680px", sm: "710px", md: "800px" },
  pt: "30px",
  overflow: "hidden",
  position: "relative",
};
const contentStyle: SxProps = {
  width: { xs: "100%" },
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // position: "relative",
};

const headingStyle: SxProps = {
  backgroundImage: "linear-gradient(to right, #FFFFFF 70%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
  pt: 1,
  "@media(max-width: 400px)": {
    fontSize: "18px !important"
  }
};

const textStyle: SxProps = {
  textAlign: "center",
  color: "rgba(239,237,253,0.6)",
  pt: 2,
};

const buttonStyle: SxProps = {
  border: "1px solid rgba(77, 47, 140, 1)",
  boxShadow: "0 0 0 30px rgba(164, 143, 255, 0.12) inset",
  fontSize: "36px",
  borderRadius: "8px",
  width: "230px",
  marginTop: "45px",
  position: "relative",
  zIndex: 2,
};

const planStyle: SxProps = {
  position: "absolute",
  backgroundImage: `url(${WorldImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  minHeight: { xs: "700px", sm: "850px" },
  textAlign: "center",
  alignItems: "center",
  top: { xs: "100px", sm: "150px" },
};

const About = () => {
  const navigate = useNavigate();
  return (
    <Box sx={stylesBox}>
      <Container maxWidth="lg">
        <Box sx={contentStyle}>
          <Box onClick={() => {
            navigate("/about");
          }}>
            {/* <Button>About</Button> */}
          </Box>
          <Typography variant="h3" sx={headingStyle}>
            We are the leading Generative{" "}
          </Typography>
          <Typography variant="h3" sx={headingStyle}>
            AI Telecommunication Service{" "}
          </Typography>
          <Typography variant="h3" sx={headingStyle}>
            {" "}
            in the United States{" "}
          </Typography>
          <Typography variant="body1" sx={textStyle}>
            Our Mission is to save you money and improve <br />
            workflows by atomizing your company.
          </Typography>
          <MuiButton sx={buttonStyle} onClick={() => {
            navigate("/about");
          }}>
            <Box display={"flex"} alignItems={"center"} gap="5px">
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
                About
              </Typography>
            </Box>
          </MuiButton>
          <SliderSection />
          <Box sx={planStyle} />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
