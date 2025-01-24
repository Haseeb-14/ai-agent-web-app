import React from 'react'
import { Box, Container, SxProps } from "@mui/material";
import { common } from "@mui/material/colors";
import ReflectImg from '../../../assets/reflect.svg'

const boxStyle: SxProps = {
    height: { xs: "100%", md: "750px" },
    color: common.white,
    pt: "90px",
    background: '#030014',
    backgroundImage: `url(${ReflectImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
};


const Reflect = () => {
    return (
        <Box sx={boxStyle}>
            <Container maxWidth="lg">

            </Container>
        </Box>
    )
}

export default Reflect