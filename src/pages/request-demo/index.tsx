import {
  Box,
  Grid,
  Typography,
  SxProps,
  Button,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import TextField from "../../components/text-field";
import Demotext from "./demo-text";
import aniccaBlack from "../../assets/anica-black-white.svg";
// import { validationSchema } from "./schema";

const gridBtnWrapper: SxProps = {
  display: "flex",
  justifyContent: { xs: "center", sm: "flex-end" },
};

const btnWrapper: SxProps = {
  borderRadius: "5px",
  padding: { xs: "9px 28px", sm: "15px 48px" },
};

const initialValues = {
  firstname: "",
  lastName: "",
  email: "",
  phoneNo: "",
  NoOfLocations: "",
  companyIndustry: "",
};

const industryOptions = [
  { value: "Restaurant", label: "Restaurant" },
  { value: "Ecommerce", label: "Ecommerce" },
  { value: "Retail", label: "Retail" },
  { value: "Professional Services", label: "Professional Services" },
  { value: "Beauty/Wellness", label: "Beauty/Wellness" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Automotive", label: "Automotive" },
  { value: "Travel", label: "Travel" },
  { value: "Fintech", label: "Fintech" },
  { value: "Property Management", label: "Property Management" },
  { value: "Media", label: "Media" },
  { value: "Veterinary", label: "Veterinary" },
  { value: "SaaS", label: "SaaS" },
  { value: "Education", label: "Education" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Government", label: "Government" },
  { value: "Other", label: "Other" },
];

const noOfLocationsOptions = [
  { value: "1", label: "1" },
  { value: "2-4", label: "2-4" },
  { value: "5-9", label: "5-9" },
  { value: "10-19", label: "10-19" },
  { value: "20+", label: "20+" },
];

const RequestDemo = () => {
  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });
  return (
    <Box pt={7}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
        <Typography
          variant="h1"
          textAlign="center"
          color={'#ffffffde'}
          sx={{ mt: 4, mb: { xs: 5, sm: 10 } }}
        >
          Request a Demo
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={8} px={2} order={{xs:2,md:1}}>
            <Box>
              <Demotext />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{
              backgroundColor: "#C6C7C7",
              padding: "40px",
              boxShadow: 14,
              borderRadius: "10px",
            }}
            order={{xs:1,md:2}}
            mb={{ xs: 4, md: 0 }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={{ xs: 3, sm: 5, md: 7 }}>
                <Grid item xs={12}>
                  <Typography variant="h6" textAlign="center" color={"black"}>
                    See How Anicca Works
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    placeholder="First Name"
                    label="First Name"
                    type="text"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    name="firstname"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    placeholder="Last Name"
                    label="Last Name"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    type="text"
                    name="lastName"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    placeholder="Work Email"
                    label="Work Email"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    type="email"
                    name="email"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    placeholder="Company Name"
                    label="Company Name"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    type="text"
                    name="companyName"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    placeholder="Phone Number"
                    label="Phone Number"
                    type="text"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    name="phoneNo"
                    formik={formik}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    select
                    variant="standard"
                    placeholder="Company Industry"
                    label="Company Industry"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    name="companyIndustry"
                    formik={formik}
                  >
                    {industryOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    variant="standard"
                    placeholder="Locations"
                    label="Number of Locations"
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    name="NoOfLocations"
                    formik={formik}
                  >
                    {noOfLocationsOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sx={gridBtnWrapper}>
                  <Button variant="contained" sx={btnWrapper} type="submit">
                    Request a Demo
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: { xs: 2, sm: 8 } }}>
        <Box
          sx={{
            p: 8,
            backgroundColor: "#4D2F8C",
            borderRadius: "30px",
          }}
        >
          <Box display={'flex'} alignItems={'center'} gap='20px' flexDirection={{xs:'column',md:'row'}}>
            <img src={aniccaBlack} alt="" width={250} />
            <Typography variant="h3" color={'#ffffff'}>
              "Before Anicca 80% of calls would go unanswered because staff was
              too busy. Anicca answers our calls 24/7, so guests get answers
              fast."
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestDemo;
