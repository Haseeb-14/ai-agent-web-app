import { Box, Typography } from "@mui/material";

interface IReviewCard {
  icon: string;
  heading: string;
  subText: string;
}

const ReviewCard = ({ icon, heading, subText }: IReviewCard) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "16px",
        boxShadow: "0px 12px 16px 0px rgba(0, 0, 0, 0.04)",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "230px", sm: "275px", md: "320px", lg: "250px" },
        background: "radial-gradient(circle, #787BFF0F, transparent)",
        margin: "16px",
        border: "1px solid #6B26FF",
      }}
    >
      <Box flexGrow={1} mb={3}>
        <Typography variant="h5" fontSize={{xs:"12px",sm:"18px"}} lineHeight={2} color="#FFFFFF">
          {subText}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <img
          src={icon}
          alt=""
          height={40}
          width={40}
          style={{
            borderRadius: "50%",
            border: "2px solid #6B26FF",
            objectFit: "cover",
            width:"40px",
            height:"40px",
            aspectRatio: 1
          }}
        />
        <Typography variant="body1" fontWeight={700} color="#FFFFFF">
          {heading}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewCard;
