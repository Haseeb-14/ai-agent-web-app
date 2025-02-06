import {
  Box,
  Stack,
  SxProps,
  IconButton,
  Container,
  Link,
} from "@mui/material";
import { Button as MUIButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
// import Logo from "../../assets/Link1.svg";
import Logo from "../../assets/newlogo.png";
import Hamburger from "./hamburger";
import Button from "../button";
import { useNavigate } from "react-router-dom";
//   import { textLinks } from "../../utils/constant";
//   import { scrollToSection } from "../../utils/helpers";

const wrapper = (): SxProps => {
  return {
    transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    height: "60px",
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    position: "fixed",
    width: "100%",
    overflow: "hidden",
    background: "#030014",
  };
};

const navbarWrap: SxProps = {
  mb: { md: 0, xs: 2 },
  mt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
  borderRadius: "10px",
  paddingLeft: "20px",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

const MUIButtonWrap: SxProps = {
  display: {
    md: "flex",
    xs: "none",
  },
  color: "#ffffff",
};

const drawerBtn: SxProps = {
  marginLeft: "auto",
  display: {
    md: "none",
    xs: "flex",
  },
};

export const textLinks = [
  { title: "About", url: "/about" },
  { title: "Pricing", url: "/pricing" },
  { title: "Case Studies", url: "/case-Study" },
];

export default function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={wrapper()}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Link href="/">
                <img alt="logo" src={Logo} height={"30px"} width={"150px"} />
              </Link>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={2}
                sx={navbarWrap}
              >
                {textLinks?.map((text) => {
                  return (
                    <MUIButton
                      variant="outlined"
                      onClick={() => {
                        text.title === "Pricing"
                          ? window.open(
                              "https://buy.stripe.com/cN29DGfwoeCxgeY3cl",
                              "_blank"
                            )
                          : navigate(`${text.url}`);
                      }}
                      sx={{
                        color: "#ffffff",
                        fontWeight: 400,
                        fontSize: "14px",
                        border: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#5263FF",
                          border: "none",
                        },
                        "&:focus": {
                          outline: "none",
                        },
                        "&:active": {
                          backgroundColor: "transparent",
                          border: "none",
                        },
                      }}
                      key={text.title}
                    >
                      {text.title}
                    </MUIButton>
                  );
                })}
                <MUIButton
                  variant="outlined"
                  onClick={() => {
                    window.open(
                      "https://dashboard.anicca.bot/",
                      "_self")
                  }}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 400,
                    fontSize: "14px",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#5263FF",
                      border: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                    "&:active": {
                      backgroundColor: "transparent",
                      border: "none",
                    },
                  }}>
                  Login
                </MUIButton>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1.3}
                sx={MUIButtonWrap}
              >
                {/* <Box onClick={() => navigate(`/request-demo`)}>
                  <Button
                  >
                    Sign
                  </Button>
                </Box> */}

                <Box onClick={() => navigate(`/request-demo`)}>
                  <Button
                  // variant="outlined"
                  // sx={{
                  //   color: "white",
                  //   fontWeight: 400,
                  //   border: "1px solid rgba(77, 47, 140, 1)",
                  //   backgroundColor: "rgba(77, 47, 140, 0.5)",
                  //   "&:hover": {
                  //     backgroundColor: "rgba(77, 47, 140, 0.8)",
                  //   },
                  //   "&:focus": {
                  //     outline: "none",
                  //   },
                  //   "&:active": {
                  //     backgroundColor: "transparent",
                  //     border: "none",
                  //   },
                  // }}
                  >
                    Request Demo
                  </Button>
                </Box>
              </Stack>
            </Box>

            <IconButton
              sx={drawerBtn}
              size="large"
              edge="start"
              aria-label="logo"
              onClick={toggleDrawer}
            >
              <MenuIcon
                sx={{
                  color: "#ffffff",
                }}
              />
            </IconButton>
            <Hamburger
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
