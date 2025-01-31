import {
    SxProps,
    TextField as MuiTextField,
    TextFieldProps,
  } from "@mui/material";
  import React from "react";
  
  type ITextField = {
    placeholder?: string;
    formik?: any;
    name: string;
  } & TextFieldProps;
  
  const TextField: React.FC<ITextField> = ({ placeholder, formik, name, ...rest }) => {
    const inputStyle: SxProps = {
      ".MuiOutlinedInput-input": {
        padding: "10px",
        height: "20px",
        color: "rgba(239,237,253,0.6)",
        fontSize: "14px",
        fontWeight: 400,
        minWidth: "250px",
        "@media(max-width: 600px)": {
          minWidth: "150px",
        },
      },
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "#F3EEFF !important",
        borderWidth: "1px !important",
      },
    };
  
    return (
      <>
        {formik ? (
          <MuiTextField
            sx={{ ".MuiFormHelperText-root": { whiteSpace: "nowrap" } }}
            name={name}
            fullWidth
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            {...formik.getFieldProps(name)}
            {...rest}
          />
        ) : (
          <MuiTextField
            sx={inputStyle}
            placeholder={placeholder || "Please Type Here"}
            variant="outlined"
            name={name}
            {...rest}
          />
        )}
      </>
    );
  };
  
  export default TextField;
  