import {
  Box,
  Container,
  Grid,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";
import bgImg from "../../../assets/integration-bg.svg";
// import Zapier from "../../../assets/Zapier.svg";
import TopLeft from "../../../assets/top-left.svg";
import TopRight from "../../../assets/top-right.svg";
import BottomLeft from "../../../assets/bottom-left.svg";
import BottomRight from "../../../assets/bottom-right.svg";
// import ReadWise from "../../../assets/ReadWise.svg";
// import outlook from "../../../assets/outlook.svg";
// import google from "../../../assets/chrome.svg";

const boxStyle: SxProps = {
  height: { xs: "100%", md: "100%" },
  background: "rgba(3, 0, 20, 0.08)",
};

const mainText: SxProps = {
  color: "#F4F0FF",
  fontSize: "16px",
  fontWeight: 500,
  mt: 1
};

const subText: SxProps = {
  color: "rgba(239, 237, 253, 0.6)",
  fontSize: "16px",
  fontWeight: 400,
  mt: 2,
};

const pictureStyle: SxProps = {
  position: "relative",
  paddingTop: { md: "15px", xs: 0 },
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "600px",
  textAlign: "center",
  alignItems: "center",
};

const Integration = () => {
  return (
    <Box sx={boxStyle}>
      <Box
        sx={{
          // minHeight: "100vh",
          color: "#fff",
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <Button
            sx={{
              border: "1px solid rgba(77, 47, 140, 1)",
              fontSize: "14px",
              borderRadius: "32px",
              width: "110px",
              mt: 2,
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap="5px">
              <Typography
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(229, 156, 255, 1), rgba(186, 156, 255, 1), rgba(156, 178, 255, 1), rgba(255, 255, 255, 0.6))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  fontSize: "14px",
                  fontWeight: "500",
                  width: "100%",
                }}
              >
                Integration
              </Typography>
            </Box>
          </Button> */}
        </Box>

        <Typography
          fontWeight={600}
          fontSize={{ xs: 32, sm: 48, md: 58 }}
          lineHeight={{ xs: "45px", sm: "65px" }}
          sx={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
            my: { xs: 0, md: 3 },
            mx: { xs: 1, sm: 0 }
          }}
        >
          Why Anicca?
        </Typography>
        <Container>
          <Box sx={pictureStyle}>
            <Grid
              container
              spacing={0}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Grid
                item
                xs={3}
                sx={{ position: "absolute", top: { xs: "10%" }, left: { xs: 0, sm: "10%" }, height: '170px', minWidth: '130px' }}
              >
                <Box textAlign="center">
                  <img src={TopLeft} alt="Zapier" width={40} height={40} />
                  <Typography sx={mainText}>Save Money and Increase Efficiency</Typography>
                  <Typography sx={subText}>
                    Clients using Anicca report an increase in Revenue and Profit
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ position: "absolute", top: { xs: "10%" }, right: { xs: 0, sm: "10%" }, height: '170px', minWidth: '130px' }}
              >
                <Box textAlign="center">
                  <img src={TopRight} alt="Readwise" width={40} height={40} />
                  <Typography sx={mainText}>Create A Better Customer Experience </Typography>
                  <Typography sx={subText}>
                    Service Your Customers With The Most Well Informed and Direct Employee.

                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ position: "absolute", bottom: "10%", left: { xs: "0%", sm: "10%" }, height: '170px', minWidth: '130px' }}
              >
                <Box textAlign="center">
                  <img
                    src={BottomLeft}
                    alt="Google and Outlook"
                    width={40} height={40}
                  />
                  <Typography sx={mainText}>24/7 Reliability </Typography>
                  <Typography sx={subText}>
                    Anicca will answer and service the phones at all times.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ position: "absolute", bottom: "10%", right: { xs: "0%", sm: "10%" }, height: '170px', minWidth: '130px' }}
              >
                <Box textAlign="center">
                  <img
                    src={BottomRight}
                    alt="Chrome and Safari"
                    width={40} height={40}
                  />
                  <Typography sx={mainText}>Custom Dashboard</Typography>
                  <Typography sx={subText}>
                    Analyze trends, traffic, and requests within your own custom dashboard
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Integration;
