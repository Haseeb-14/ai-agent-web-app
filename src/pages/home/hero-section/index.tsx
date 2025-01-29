import { Box, Button, Container, SxProps, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import homePageImg from "../../../assets/homeBannerTwo.svg";
import buttonStars from "../../../assets/button-stars.svg";

const boxStyle: SxProps = {
  height: { xs: "100%", md: "100%" },
  background: "rgba(3, 0, 20, 0.08)",
  color: common.white,
  pt: { xs: "20px", sm: "40px", md: "90px" },
};

const leftBox: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: { xs: "column-reverse", md: "row" },
  width: "100%",
  pt: { xs: 2, xm: 3, md: 10 },
};

const textStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: { xs: 0, sm: "8px" },
  TextAlign: "center",
  p: { xs: 2, sm: 7, md: "0px" },
};

const planStyle: SxProps = {
  position: "relative",
  paddingTop: { xs: 0, sm: "15px" },
  // backgroundImage: `url(${homePageImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: { xs: "215px", sm: "450px", md: "700px", xl:"900px" },
  textAlign: "center",
  alignItems: "center",
};
const buttonStyle: SxProps = {
  position: "absolute",
  border: "1px solid rgba(77, 47, 140, 1)",
  fontSize: "28px",
  borderRadius: "32px",
  top: 20,
  left: "50%",
  transform: "translateX(-50%)",
  width: { xs: "90%", sm: "380px" },
};

const HeroSection = () => {
  return (
    <Box sx={boxStyle}>
      <Container maxWidth="lg">
        <Box sx={leftBox}>
          <Box sx={textStyle}>
            <Typography
              fontWeight={600}
              fontSize={{ xs: "22px", sm: 48, md: 58 }}
              sx={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                textAlign: "center",
              }}
            >
              AI Agent Built For You
            </Typography>
            <Typography
              fontSize={18}
              sx={{ color: "rgba(239, 237, 253, 0.7)" }}
              fontWeight={400}
              textAlign={"center"}
            >
              Anicca is your personal Agent that will
              cold call, set appointments, handle customer service and perform all necessary tasks.
            </Typography>
            <Typography
              fontSize={18}
              sx={{ color: "rgba(239, 237, 253, 0.7)" }}
              fontWeight={500}
              textAlign={"center"}
            >
              Save Money, Time, and Efficieny
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={planStyle}>
        <Button sx={buttonStyle} onClick={() => {
          window.open("https://buy.stripe.com/cN29DGfwoeCxgeY3cl", "_blank");
        }}>
          <Box display={"flex"} alignItems={"center"} gap="5px">
            <img src={buttonStars} alt="" width={20} height={10} />
            <Typography
              sx={{
                background:
                  "linear-gradient(90deg, rgba(229, 156, 255, 1), rgba(186, 156, 255, 1), rgba(156, 178, 255, 1), rgba(255, 255, 255, 0.6))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                fontSize: "26px",
                fontWeight: "700",
                width: "100%",
              }}
            >
              Start Now
            </Typography>
          </Box>
        </Button>
        <Box sx={{ height: { xs: "330px", sm: "550px", md: "auto" } }}>
          <img src={homePageImg} style={{ width: "100%", height: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
