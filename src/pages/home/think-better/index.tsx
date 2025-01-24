import { Box, Button, Container, SxProps, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import homePageImg from "../../../assets/think-better-bg.png";

const boxStyle: SxProps = {
  height: { xs: "100%", md: "100%" },
  background: "rgba(3, 0, 20, 0.08)",
  color: common.white,
  pt: "0px",
};

const mainDiv: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  pt: { xs: 2, sm: 4, md: 10 },
};

const textStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: "8px",
  TextAlign: "center",
  p: { xs: 0, sm: 0, md: "0px" },
};

const planStyle: SxProps = {
  position: "relative",
  paddingTop: "15px",
  backgroundImage: `url(${homePageImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: { xs: "226px", sm: "600px" },
  textAlign: "center",
  alignItems: "center",
};
const buttonStyle: SxProps = {
  position: "absolute",
  border: "1px solid rgba(77, 47, 140, 1)",
  boxShadow: "0 0 0 30px rgba(164, 143, 255, 0.12) inset",
  fontSize: "36px",
  borderRadius: "8px",
  top: { xs: 20, md: 60 },
  left: "50%",
  transform: "translateX(-50%)",
  width: "230px",
};

const ThinkBetter = () => {
  return (
    <Box sx={boxStyle}>
      <Container maxWidth="lg">
        <Box sx={mainDiv}>
          {/* <Box>
            <Button
              sx={{
                border: "1px solid rgba(77, 47, 140, 1)",
                fontSize: "14px",
                borderRadius: "32px",
                width: "110px",
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
                  Get Started
                </Typography>
              </Box>
            </Button>
          </Box> */}
          <Box sx={textStyle}>
            <Typography
              fontWeight={600}
              fontSize={{ xs: 22, sm: 32, md: 58 }}
              lineHeight={{ xs: "auto", md: "80px" }}
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
              Make Your Company Grand
            </Typography>
            <Typography
              fontSize={16}
              sx={{ color: "#EFEDFDB2" }}
              fontWeight={400}
              textAlign={"center"}
            >
              Save Money, Labor, and Time
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        sx={planStyle}
        onClick={() => {
          window.open("https://buy.stripe.com/cN29DGfwoeCxgeY3cl", "_blank");
        }}
      >
        <Button sx={buttonStyle}>
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
              Start Now
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default ThinkBetter;
