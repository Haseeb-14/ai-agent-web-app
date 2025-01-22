import { Box, Chip, Container, Grid, SxProps, Typography } from "@mui/material";
import React from "react";
import PricingCard from "../../components/pricing-card";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VibrationIcon from "@mui/icons-material/Vibration";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SliderSection from "./slider-section";

const chipStyle: SxProps = {
  p: "22px 30px",
  backgroundColor: "#FFFFFF",
  border: "2px solid #6744AA",
};

const Pricing = () => {
  return (
    <Box pt={7}>
      <Container>
        <Box sx={{ m: { xs: 4, sm: 8 } }}>
          <Typography
            variant="h1"
            textAlign="center"
            color={"#ffffffde"}
            sx={{ mt: 4, mb: 4 }}
          >
            Choose the perfect plan for your business
          </Typography>
          <Typography
            fontSize={"22px !important"}
            sx={{ color: "rgba(239, 237, 253, 0.7)" }}
            fontWeight={700}
            textAlign="center"
          >
            Regardless of your company type or size, we have a plan that
            fits your needs.
          </Typography>
        </Box>
        <Box sx={{ borderTop: "1px solid #0b1325" }}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <PricingCard
                price="$99.00/mo"
                packageName="Starter"
                perks={[
                  "Customizable Voice",
                  "Customizable Greeting Message",
                  "Customizable Topics",
                  "Outbound Texts",
                  "Analytics Dashboard",
                ]}
                premium={false}
                yearly={false}
                buttonText="Get started"
                startText="Starting at"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <PricingCard
                price="Custom Pricing"
                packageName="Need more?"
                perks={[
                  "Everything in Starter, plus:",
                  "Integration Plugins",
                  "Premium Voices",
                  "Advanced Analytics",
                  "White Glove Support",
                ]}
                premium={true}
                yearly={false}
                buttonText="Contact Sales"
                startText="Talk to us about"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ m: { xs: 4, sm: 8 }, py: 6 }}>
          <Typography
            variant="h2"
            textAlign="center"
            color={"#ffffffde"}
            sx={{ mt: 4, mb: 4 }}
          >
            Included in every plan
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Chip
              icon={<PersonAddAltIcon />}
              label="Unlimited users"
              variant="outlined"
              sx={chipStyle}
            />
            <Chip
              icon={<RocketLaunchIcon />}
              label="Go live in less than 24hrs"
              variant="outlined"
              sx={chipStyle}
            />
            <Chip
              icon={<VibrationIcon />}
              label="Answer on the first ring"
              variant="outlined"
              sx={chipStyle}
            />
            <Chip
              icon={<ScheduleIcon />}
              label="Take calls 24/7"
              variant="outlined"
              sx={chipStyle}
            />
            <Chip
              icon={<SupportAgentIcon />}
              label="White Glove Support"
              variant="outlined"
              sx={chipStyle}
            />
          </Box>
        </Box>
      </Container>
      <Box borderTop="1px solid #0b1325">
        <SliderSection />
      </Box>
    </Box>
  );
};

export default Pricing;
