import { Box, Container, Grid, SxProps, Typography } from "@mui/material";
import React from "react";
import World from "../../assets/world_icon.svg";
import Leaf from "../../assets/leaf.svg";
import Ability from "../../assets/ability.svg";
import Smile from "../../assets/smile.svg";

const stylesBox: SxProps = {
  pt: "70px",
  overflow: "hidden",
};

const stylesMain: SxProps = {
  py: "40px",
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  justifyContent: "center",
  textAlign: "center",
  gap: { xs: 1.5, sm: 3, md: 5 },
};
const stylesCard: SxProps = {
  borderRadius: 2,
  border: "1px solid #fff",
  padding: "20px 25px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: { xs: "100%", sm: "calc(45% - 32px)" },
};

const stylesIcon: SxProps = {
  backgroundImage:
    "linear-gradient( #787BFF0F,  #787BFF0F), radial-gradient(circle,  #787BFF0F 60%, #A020F0)",
  borderRadius: "200vw",
  justifyContent: "center",
  alignItems: "center",
  width: "4rem",
  height: "4rem",
  display: "flex",
};
const AboutPage = () => {
  const cardList = [
    {
      img: World,
      heading: "Just",
      content: "Working and living in accordance with natural law.",
    },
    {
      img: Leaf,
      heading: "Wise",
      content: "Living in harmony with nature and cooperating with the inevitable",
    },
    {
      img: Ability,
      heading: "Courageous",
      content: "Building your product with resilience and strength.",
    },
    {
      img: Smile,
      heading: "Moderate",
      content: "Avoiding excess and deficiency in our actions.",
    },
  ];
  return (
    <Box sx={stylesBox}>
      <Container maxWidth="lg">
        <Box sx={stylesMain}>
          <Typography variant="h2">
            Revolutionizing the Telecommunication industry with Generative AI
          </Typography>
          <Typography variant="body1" fontSize={{ xs: 16, sm: 20, md: 26 }}>
            We have built Anicca to relieve pressure from your company's and
            lower costs. Anicca provides a Dashboard to review analytics and
            give you access to a database of your call logs. This will bring key
            insights on users responses, requests, and customer satisfaction.
            Join the future, lower your costs, increase your sales, and migrate
            to the next generation of Artificial Intelligence
          </Typography>
          <Typography variant="body1" fontSize={{ xs: 16, sm: 20, md: 26 }}>
            Calling a business should be effortless, not a hassle. Missed calls
            can mean missed opportunities for revenue. Our goal is to make
            calling a business a personalized, efficient, and delightful
            experience.
          </Typography>
          <Typography variant="body1" fontSize={{ xs: 16, sm: 20, md: 26 }}>
            We harness AI technology to create voice interactions that are more
            engaging and human-like than ever before. By 2030, our aim is to
            save businesses and consumers a billion minutes of valuable time
            while making generative ai experiences the go-to method of
            communication.
          </Typography>
        </Box>
        <Box sx={stylesMain}>
          <Typography variant="h2">Our Values</Typography>
          <Typography variant="body1" fontSize={{ xs: 16, sm: 20, md: 26 }}>
            Consistency and commitment to our values are the foundation of our
            company. These principles allow us to deliver exceptional value to
            our customers and attract top talent to our expanding team. If our
            values resonate with you, we look forward to having you join us
          </Typography>
        </Box>
        <Grid
          container
          alignItems="stretch"
          justifyContent="center"
          direction="row"
          gap={2}
        >
          {cardList.map((item) => (
            <Box sx={stylesCard}>
              <Box sx={stylesIcon}>
                <img src={item.img} width={40} />
              </Box>
              <Typography variant="h3" fontWeight={400}>
                {item.heading}
              </Typography>
              <Typography variant="subtitle1">{item.content}</Typography>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
