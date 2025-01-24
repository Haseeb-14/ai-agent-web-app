import { Box, Button, Container, SxProps, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import securityImg from "../../../assets/AI-generated.svg";
import encryption from "../../../assets/newlogo.png";
import { useNavigate } from "react-router-dom";

const boxStyle: SxProps = {
  height: { xs: "100%", md: "100%" },
  background: "rgba(3, 0, 20, 0.08)",
  color: common.white,
  pt: "0px",
  py: { xs: 0, sm: 1 },
  pb: 2,
};

const mainDiv: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  // pt: 2,
};

const textStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
  gap: { xs: 1, md: "15px" },
  pt: { sm: 1, md: 3 },
  TextAlign: "center",
};

const planStyle: SxProps = {
  position: "relative",
  backgroundImage: `url(${securityImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: { xs: "350px", md: "500px" },
  textAlign: "center",
  alignItems: "center",
};
const wrapperStyle: SxProps = {
  position: "absolute",
  top: { xs: '5%', sm: "15%" },
  left: "50%",
  transform: "translateX(-50%)",
  width: { xs: "320px", sm: "600px" },
};
const buttonStyle: SxProps = {
  border: "1px solid rgba(77, 47, 140, 1)",
  boxShadow: "0 0 0 30px rgba(164, 143, 255, 0.42) inset",
  fontSize: "36px",
  borderRadius: "8px",
  width: "280px",
  alignSelf: "center",
};

const Security = () => {
  const navigate = useNavigate();
  const handleCall = () => {
    window.location.href = `tel:+1 417 479 2705`;
  };
  return (
    <Box sx={boxStyle}>
      <Container maxWidth="lg">
        <Box sx={planStyle}>
          <Box sx={wrapperStyle}>
            <Box sx={mainDiv}>
              <img src={encryption} alt="" width={250} height={40} style={{ paddingLeft: '40px', paddingBottom: '10px' }} />
              <Box sx={textStyle}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: 22, sm: 32, md: 40 }}
                  lineHeight="1"
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
                  A Generative AI Telecommunication Service
                </Typography>
                <Typography
                  fontSize={{ xs: 16, sm: 18 }}
                  sx={{ color: "rgba(239, 237, 253, 0.9)" }}
                  fontWeight={400}
                  textAlign={"center"}
                  pb={2}
                >
                  Create your own personalized AI agent
                </Typography>
                <Box onClick={handleCall} pt={6}>
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
                        Speak to Anicca
                      </Typography>
                    </Box>
                  </Button>
                </Box>
                <Button sx={buttonStyle}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap="5px"
                    onClick={() => {
                      navigate("/request-demo");
                    }}
                  >
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
                      Request a Demo
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Security;
