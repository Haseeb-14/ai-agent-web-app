import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  SxProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const closeBtn: SxProps = {
  color: "white",
  fontSize: "30px",
};
const drawerItems: SxProps = {
  borderBottom: "1px solid #4b4040",
  padding: "15px 20px",
  display: "block",
  textAlign: "center",
};
const drawerButtonWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
};
const buttonStyle: SxProps = {
  width: "200px",
  alignSelf: "center",
  color: "white",
  fontWeight: "500",
  mt: 3,
};

export const textLinks = [
  { title: "About", url: "/about" },
  { title: "Pricing", url: "/pricing" },
  { title: "Case Studies", url: "/case-Study" },
];

const Hamburger = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (item: boolean) => void;
}) => {
  const navigate = useNavigate();

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#000000",
          width: "100%",
        },
      }}
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box
        sx={{
          background: "#000000",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ alignSelf: "end", width: "100%" }}>
          <IconButton
            sx={{
              margin: "12px 16px 5px 0px",
              alignSelf: "flex-end",
            }}
            size="medium"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <CloseIcon sx={closeBtn} />
          </IconButton>
        </Box>
        <Box>
          <List>
            {textLinks.map((item, index) => (
              <ListItem
                sx={drawerItems}
                onClick={() => {
                  item.title === "Pricing"
                    ? window.open(
                        "https://buy.stripe.com/cN29DGfwoeCxgeY3cl",
                        "_blank"
                      )
                    : navigate(`${item.url}`);
                  setIsDrawerOpen(false);
                }}
                key={index}
              >
                <Button
                  variant="text"
                  sx={{ color: "white", fontWeight: "500" }}
                  key={item.title}
                >
                  {item.title}
                </Button>
              </ListItem>
            ))}
          </List>
          <List sx={drawerButtonWrapper}>
            {/* <Button
              variant="outlined"
              color="inherit"
              sx={buttonStyle}
              onClick={() => {
                navigate("/request-demo");
                setIsDrawerOpen(false);
              }}
            >
              Sign
            </Button> */}
            <Button
              variant="outlined"
              color="inherit"
              sx={buttonStyle}
              onClick={() => {
                navigate("/request-demo");
                setIsDrawerOpen(false);
              }}
            >
              Request Demo
            </Button>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Hamburger;
