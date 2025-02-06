import { Box, Button as MuiButton, SxProps, Typography } from '@mui/material'
import React from 'react'

const buttonStyle: SxProps = {
    padding: "10px 15px",
    display: "inline-flex",
    height: '32px',
}
const boxStyle: SxProps = {
    padding: '1px',
    border: '1px solid #4D2F8C',
    boxShadow: '0 0 0 30px rgba(164, 143, 255, 0.12) inset',
    borderRadius: '20px',
}
const textStyle: SxProps={
    backgroundImage: 'linear-gradient(to right, #E59CFF 100%, #BA9CFF 100%, #9CB2FF 100%, #FFFFFF 40%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
}

const Button = ({ children }: any) => {
    return (
        <Box sx={boxStyle}>
            <MuiButton sx={buttonStyle}><Typography sx={textStyle} variant='subtitle2'>{children}</Typography></MuiButton>
        </Box>
    )
}

export default Button