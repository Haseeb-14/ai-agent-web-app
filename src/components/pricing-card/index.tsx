import React from "react";
import { Box, Button, SxProps, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IPricingCard {
  price: string;
  packageName: string;
  perks: string[];
  premium?: boolean;
  yearly?: boolean;
  buttonText: string;
  startText: string;
}

const mainContainer = (premimum:boolean): SxProps => ({
  p: { xs: 2, sm: 4 },
  borderRadius: "16px",
  width: "370px",
  height: "570px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  border:premimum ? "3px solid #6744AA" : 'none'
});

const headerBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "24px",
};

const perksBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingTop: "36px",
  borderTop: "1px solid gray",
};

const PricingCard: React.FC<IPricingCard> = ({
  price,
  packageName,
  perks,
  premium = false,
  buttonText,
  startText,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={mainContainer(premium)}>
      <Box sx={headerBox}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "1",
            color: "#0D0D0D",
            padding: "12px 20px",
            border: `3px solid #6B26FF`,
            borderRadius: "24px",
            width: "100px",
          }}
        >
          {packageName}
        </Typography>
        <Box my={3}>
          <Typography
            fontSize={"16px"}
            color={"#0D0D0D"}
            marginTop={2}
            fontWeight={500}
          >
            {startText}
          </Typography>
          <Typography fontSize={"36px"} color={"#0D0D0D"} fontWeight={700}>
            {price}
          </Typography>
        </Box>
        <Box alignSelf={"center"} marginTop={3} paddingBottom={2}>
          <Button
            variant={premium ? "contained" : "outlined"}
            color="secondary"
            sx={{
              borderRadius: "24px",
              backgroundColor: premium ? "#6B26FF" : "#FFFFFF",
              color: premium ? "#FFFFFF" : "#6B26FF",
              width: "200px",
              height: "50px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              border: "1px solid #6B26FF",
            }}
            onClick={() => {
              premium
                ? navigate("/")
                : window.open(
                    "https://buy.stripe.com/cN29DGfwoeCxgeY3cl",
                    "_blank"
                  );
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
      <Box sx={perksBox}>
        {perks.map((perk, index) => (
          <Typography
            key={index}
            fontSize={"17px"}
            color={"#000000"}
            mb={0.5}
            fontWeight={premium && index === 0 ? 600 : 400}
          >
            {perk}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PricingCard;
