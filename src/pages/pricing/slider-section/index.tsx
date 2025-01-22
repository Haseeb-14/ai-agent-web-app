import { Box, Typography } from "@mui/material";
import React from "react";
import ReviewCard from "../../../components/review-card";
import Slider from "../../../components/slider";
import { SwiperSlide } from "swiper/react";
import AccountCircleIcon from "../../../assets/avatarIcon.webp"

export const featureData = [
    {
        icon: AccountCircleIcon,
        heading: "Charlie, Director of Operations @ Crave Fishbar Group",
        subText: "Before anicca.ai 80% of calls would go unanswered because staff was too busy. anicca.ai answers our calls 24/7, so guests get answers fast.",
      },
      {
        icon: AccountCircleIcon,
        heading: "Abraham Merchant, Founder @ Merchants Hospitality Group",
        subText: "anicca.ai saves my team over a hundred hours per month!",
      },
      {
        icon: AccountCircleIcon,
        heading: "Chris Viola, Development Partner, Cul+ure Collective",
        subText: "Even with staffing better than Covid times, my staff would likely boycott me if we were to stop using anicca.",
      },
      {
        icon: AccountCircleIcon,
        heading: "Dustin @ Weimann Maclise",
        subText: "Every one of our managers has been super appreciative of this product. We had 700 voicemails before we launched anicca.ai. Now we don’t worry about them.",
      },
      {
        icon: AccountCircleIcon,
        heading: "Charlie, Director of Operations @ Crave Fishbar Group",
        subText: "Before anicca.ai 80% of calls would go unanswered because staff was too busy. anicca.ai answers our calls 24/7, so guests get answers fast.",
      },
  ];

const SliderSection = () => {
  return (
    <Box sx={{ py: 6, width: "100%" }}>
      <Typography
        variant="h2"
        textAlign="center"
        color={"#ffffffde"}
        sx={{ mt: 4, mb: 4 }}
      >
        Why our customers are choosing Anicca AI
      </Typography>
      <Box
        p={2}
        sx={{ pt: 10, pb: { sx: 1, sm: 6, md: 10 } }}
        alignSelf={"center"}
      >
        <Slider>
          {featureData.map((data, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                icon={data.icon}
                subText={data.subText}
                heading={data.heading}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SliderSection;
