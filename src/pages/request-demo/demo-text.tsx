import { Stack, Typography } from "@mui/material";
import React from "react";

const Demotext = () => {
  return (
    <>
      <Stack spacing={2} mr={4}>
        <Typography
          fontWeight={600}
          fontSize={"35px !important"}
          sx={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          DEMO
        </Typography>
        <Typography
          fontSize={"22px !important"}
          sx={{ color: "rgba(239, 237, 253, 0.7)" }}
          fontWeight={700}
        >
          Why should your business sleep when the phone never does?
        </Typography>
        <Typography fontSize={18} sx={{ color: "#6B26FF" }} fontWeight={500}>
          Your phone calls, answered
        </Typography>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            marginTop: "20px",
            color: "#FFFFFF",
          }}
        >
          <li
            style={{
              marginBottom: "10px",
            }}
          >
            <Typography fontSize={14} fontWeight={400}>
              Virtually every call is answered, with the vast majority being
              resolved without needing to involve your team.
            </Typography>
          </li>
          <li>
            <Typography fontSize={14} fontWeight={400}>
              With Anicca AI, ensure no call goes unanswered. Eliminate
              voicemails and provide valuable responses to callers at any time.
            </Typography>
          </li>
        </ul>
        <Typography fontSize={18} sx={{ color: "#6B26FF" }} fontWeight={500}>
          Speak Your Language
        </Typography>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            marginTop: "20px",
            color: "#FFFFFF",
          }}
        >
          <li
            style={{
              marginBottom: "10px",
            }}
          >
            <Typography fontSize={14} fontWeight={400}>
              Customize responses to sound like you or your staff are speaking
              directly to customers over the phone.
            </Typography>
          </li>
          <li>
            <Typography fontSize={14} fontWeight={400}>
              Choose from more than 20 voices and add branded music for a unique
              touch.
            </Typography>
          </li>
        </ul>
        <Typography fontSize={18} sx={{ color: "#6B26FF" }} fontWeight={500}>
          Access Your Personal Concierge
        </Typography>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            marginTop: "20px",
            color: "#FFFFFF",
          }}
        >
          <li
            style={{
              marginBottom: "10px",
            }}
          >
            <Typography fontSize={14} fontWeight={400}>
              "Jeeves, are you available? With Anicca AI, your team can cut down
              on hundreds to thousands of calls, giving them more time to focus
              on engaging your customers."
            </Typography>
          </li>
          <li>
            <Typography fontSize={14} fontWeight={400}>
              Picture every call answered with consistent enthusiasm. Say hello
              to elevated quality.
            </Typography>
          </li>
        </ul>
        <Typography fontSize={18} sx={{ color: "#6B26FF" }} fontWeight={500}>
          Experience Exceptional Service
        </Typography>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            marginTop: "20px",
            color: "#FFFFFF",
          }}
        >
          <li
            style={{
              marginBottom: "10px",
            }}
          >
            <Typography fontSize={14} fontWeight={400}>
              We ensure your callers receive top-notch service by guiding you
              through setup and monitoring your performance daily.
            </Typography>
          </li>
          <li>
            <Typography fontSize={14} fontWeight={400}>
              Over 85% of callers agree that Anicca significantly improves their
              call experience.
            </Typography>
          </li>
        </ul>
      </Stack>
    </>
  );
};

export default Demotext;
