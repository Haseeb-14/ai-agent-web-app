import React from "react";
import {
  Box,
  Container,
  SxProps,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import AcademyImg from "../../../assets/academy.svg";
import { useNavigate } from "react-router-dom";

const stylesBox: SxProps = {
  height: { xs: "100%", md: "450px" },
  pt: { xs: 0, sm: "40px" },
  overflow: "hidden",
};
const contentStyle: SxProps = {
  width: { xs: "100%", sm: "600px" },
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundImage: `url(${AcademyImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: { xs: "contain", sm: "cover" },
  height: "430px",
  gap: { xs: "5px" },
};

const headingStyle: SxProps = {
  backgroundImage: "linear-gradient(to right, #FFFFFF 70%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
};

const textStyle: SxProps = {
  textAlign: "center",
  color: "rgba(239,237,253,0.6)",
};

const buttonStyle: SxProps = {
  border: "1px solid rgba(77, 47, 140, 1)",
  boxShadow: "0 0 0 30px rgba(164, 143, 255, 0.12) inset",
  fontSize: "36px",
  borderRadius: "8px",
  width: "230px",
  marginTop: "15px",
};

const Academy = () => {
  const navigate = useNavigate()
  return (
    <Box sx={stylesBox}>
      <Container maxWidth="lg">
        <Box sx={contentStyle}>
          {/* <Button>Academy</Button> */}
          <Typography variant="h3" sx={headingStyle}>
            Learn about what
          </Typography>
          <Typography variant="h3" sx={headingStyle}>
            our clients have to say
          </Typography>
          <Typography variant="body1" sx={textStyle}>
            {" "}
            Real life reports of our clients increasing
            <br />
            there Revenues and Profits.
          </Typography>
          <Box onClick={() => { navigate('/case-Study') }}>
            <MuiButton sx={buttonStyle}>
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
                  Case Studies
                </Typography>
              </Box>
            </MuiButton>
          </Box>
          {/* <Box sx={planStyle} /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Academy;
