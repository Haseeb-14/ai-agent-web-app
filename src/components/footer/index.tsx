import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import Logo from "../../assets/newlogo.png"
import { Twitter } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "../button";
import TextField from "../text-field";

const stylesBox: SxProps = {
  height: { xs: "100%" },
  pt: { xs: "50px", md: "90px" },
  pb: "40px",
};

const headingStyle: SxProps = {
  backgroundImage: "linear-gradient(to right, #FFFFFF 70%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const list = [
  {
    name: "Annica.bot",
    blank: true,
    list: [
      {
        name: "Contact Us",
        link:
          "https://forms.office.com/Pages/ResponsePage.aspx?id=bbRsRGTH5UWLUg_cvUlBWXtUsq0_cS9GtfnobbFjYidUMFRVSTQyNDg2SEw2NU1CQ1hQN0E2VE42My4u",
      },
      {
        name: "Privacy Policy",
        link:
          "https://aniccabot-my.sharepoint.com/:w:/g/personal/jessie_anicca_bot/EYy0YMC1zEtNv39PeVek4tMB60QuThN4lUw4hWVz0MoJjg?e=tMmGoI",
      },
      {
        name: "Terms Of Service",
        link:
          "https://aniccabot-my.sharepoint.com/:w:/g/personal/jessie_anicca_bot/EYy0YMC1zEtNv39PeVek4tMB60QuThN4lUw4hWVz0MoJjg?e=tMmGoI",
      },
    ],
  },
  {
    name: "Menu",
    blank: false,
    list: [
      { name: "Pricing", link: "https://buy.stripe.com/cN29DGfwoeCxgeY3cl" },
      { name: "About", link: "/about" },
      { name: "Case Studies", link: "/case-Study" },
    ],
  },
  {
    name: "Follow Us",
    blank: true,
    list: [
      { name: "Linkedin", link: "https://x.com/Anicca_bot" },
      {
        name: "Twitter",
        link: "https://www.linkedin.com/in/anicca-bot-335673315",
      },
    ],
  },
];
const Footer = () => {
  return (
    <Box sx={stylesBox}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={6} sm={4} xs={12}>
            <Stack
              justifyContent="space-between"
              height="100%"
              gap={{ xs: 4, sm: 0 }}
              alignItems={{ xs: "center", sm: "start" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap={{ sm: 2, xs: 0.5 }}
              >
                <img alt="logo" src={Logo} height={"30px"} width={"150px"} />
              </Stack>
              <Stack direction="row" alignItems="center" gap={2}>
                <Box
                  onClick={() => {
                    window.open("https://x.com/Anicca_bot", "_blank");
                  }}
                >
                  <Twitter color="primary" sx={{ cursor: "pointer" }} />
                </Box>
                <Box
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/anicca-bot-335673315",
                      "_blank"
                    );
                  }}
                >
                  <LinkedInIcon color="primary" sx={{ cursor: "pointer" }} />
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <>
            {list.map((item) => (
              <Grid item xs={4} sm={2.5} md={2}>
                <Stack gap={{ sm: 2, xs: 1 }}>
                  <Typography variant="body1" color="#F4F0FF" fontWeight="500">
                    {item.name}
                  </Typography>
                  <>
                    {item.list.map((list) =>
                      item.blank ? (
                        <Typography
                          variant="body1"
                          color="rgba(239,237,253,0.6)"
                          component={"a"}
                          href={list.link}
                          target="_blank"
                          sx={{
                            "&:hover": {
                              color: "#fff",
                            },
                          }}
                        >
                          {list?.name}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          color="rgba(239,237,253,0.6)"
                          component={"a"}
                          href={list.link}
                          sx={{
                            "&:hover": {
                              color: "#fff",
                            },
                          }}
                        >
                          {list?.name}
                        </Typography>
                      )
                    )}
                  </>
                </Stack>
              </Grid>
            ))}
          </>
        </Grid>
        <Box py={{ md: 8, sm: 4, xs: 2 }}>
          <Divider />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", sm: "space-between" }}
          flexWrap="wrap"
          gap={1}
        >
          <Stack gap={0.5} alignItems={{ xs: "center", sm: "start" }}>
            <Typography variant="h5" sx={headingStyle}>
              Join our newsletter
            </Typography>
            <Typography variant="body1" color="rgba(239,237,253,0.6)">
              Keep up to date with everything Reflect
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <TextField placeholder="Enter Your Email" name="email" />
            <Box display="inline-flex" component="span">
              <Button>Subscribe</Button>
            </Box>
          </Stack>
        </Stack>
        <Box py={{ md: 8, sm: 4, xs: 2 }}>
          <Divider />
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems={{ xs: "center", sm: "start" }}
          gap={{ xs: 1, sm: 0 }}
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="body1" color="rgba(239,237,253,0.6)">
              Privacy Policy
            </Typography>
            <Typography
              variant="body1"
              color="rgba(239,237,253,0.6)"
              component="li"
            >
              Terms of Conditions
            </Typography>
          </Stack>
          <Box>
            <Typography variant="body1" color="rgba(239,237,253,0.6)">
              Reflect App, LLC. All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
