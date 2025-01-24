import { Box } from "@mui/material";
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
    heading: "John , Director of Operations @ Scion Holdings",
    subText: "With anicca.ai, our team is no longer cold calling, but closing in bound calls through the use of their services.",
  },
  {
    icon: FounderCircleIcon,
    heading: "Jake Smith, Founder @ Hospitality Solutions",
    subText: "anicca.ai has saved my team over a hundred hours each month, allowing us to reduce costs and focus on enhancing customer experience's.",
  },
  //   {
  //     icon: AccountCircleIcon,
  //     heading: "Charlie, Director of Operations @ Crave Fishbar Group",
  //     subText: "Before anicca.ai 80% of calls would go unanswered because staff was too busy. anicca.ai answers our calls 24/7, so guests get answers fast.",
  //   },
  {
    icon: PartnerCircleIcon,
    heading: "Michael Johnson, Development Partner, NextGen Ventures",
    subText: "My team would likely protest if we stopped using anicca, as our floor has converted from sales development representaives to closers.",
  },
  {
    icon: ManagerCircleIcon,
    heading: "Chris @ Gourmet Bistro",
    subText: "Our managers highly appreciate this product. We no longer have to worry about the 700 voicemails we used to receive before implementing anicca.ai.",
  },
  {
    icon: AlexCircleIcon,
    heading: "Alex Martinez, Director of Operations @ Fine Dine Group",
    subText: "Prior to using anicca.ai, 80% of our calls went unanswered due to busy staff. Now, our guests get fast responses that satisfy their needs.",
  },
];

const SliderSection = () => {
  return (
    <Box sx={{ width: "100%" ,pt:2}}>
      {/* <Typography
        variant="h2"
        textAlign="center"
        color={"#ffffffde"}
        sx={{ mt: 1.5 }}
      >
        Loved by Thinkers
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
        color={"#ffffffde"}
        sx={{ mt: 1.5 }}

      >
        Why our customers are choosing Anicca AI
      </Typography> */}
      <Box
        sx={{ pb: { sx: 1, sm: 3, md: 6 } }}
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
