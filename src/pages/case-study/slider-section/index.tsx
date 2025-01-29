import { Box, Typography } from "@mui/material";
import React from "react";
import ReviewCard from "../../../components/review-card";
import Slider from "../../../components/slider";
import { SwiperSlide } from "swiper/react";
import AccountCircleIcon from "../../../assets/avatarIcon.jpeg"
import FounderCircleIcon from "../../../assets/avatarIcon1.jpeg"
import PartnerCircleIcon from "../../../assets/avatarIcon2.jpeg"
import ManagerCircleIcon from "../../../assets/avatarIcon3.jpeg"
import AlexCircleIcon from "../../../assets/alex.jfif"

export const featureData = [
  {
    icon: AccountCircleIcon,
    heading: "John , Director of Operations @ Urban Eats",
    subText: "With Anicca.bot, our call response rate has significantly improved, ensuring guests receive prompt answers around the clock.",
  },
  {
    icon: FounderCircleIcon,
    heading: "Jake Smith, Founder @ Hospitality Solutions",
    subText: "Anicca.bot has saved my team over a hundred hours each month, allowing us to focus on enhancing customer experience.",
  },
  //   {
  //     icon: AccountCircleIcon,
  //     heading: "Charlie, Director of Operations @ Crave Fishbar Group",
  //     subText: "Before Anicca.bot 80% of calls would go unanswered because staff was too busy. Anicca.bot answers our calls 24/7, so guests get answers fast.",
  //   },
  {
    icon: PartnerCircleIcon,
    heading: "Michael Johnson, Development Partner, NextGen Ventures",
    subText: "My team would likely protest if we stopped using anicca, even with staffing levels better than pre-pandemic times.",
  },
  {
    icon: ManagerCircleIcon,
    heading: "Chris @ Gourmet Bistro",
    subText: "Our managers highly appreciate this product. We no longer have to worry about the 700 voicemails we used to receive before implementing Anicca.bot.",
  },
  {
    icon: AlexCircleIcon,
    heading: "Alex Martinez, Director of Operations @ Fine Dine Group",
    subText: "Prior to using Anicca.bot, 80% of our calls went unanswered due to busy staff. Now, our guests get fast responses anytime.",
  },
];

const SliderSection = () => {
  return (
    <Box sx={{ width: "100%" ,pt:6}}>
      <Typography
        variant="h2"
        textAlign="center"
        color={"#ffffffde"}
        sx={{ mt: 1.5,mb:2 }}
      >
        See What Folks Say About Anicca.bot
      </Typography>
      {/* <Typography
        variant="h5"
        textAlign="center"
        color={"#ffffffde"}
        sx={{ mt: 1.5 }}

      >
        Why our customers are choosing Anicca AI
      </Typography> */}
      <Box
        sx={{ pb: { sx: 1, sm: 3, md: 4 } }}
        alignSelf={"center"}
        position="absolute"
        width="100%"
        zIndex={999}
        left={0}
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
