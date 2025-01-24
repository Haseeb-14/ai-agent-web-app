import React from 'react'
import { Box, Container, Stack, SxProps, Typography } from '@mui/material'
import PricingImg from '../../../assets/pricing.svg'
import bulletImg from '../../../assets/bullet.svg'
import Button from '../../../components/button';


const stylesBox: SxProps = {
    height: { xs: "100%", md: "750px" },
    pt: "90px",
};
const contentStyle: SxProps = {
    width: { sm: '600px', xs: '330px' },
    margin: '0 auto',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

const headingStyle: SxProps = {
    backgroundImage: 'linear-gradient(to right, #FFFFFF 70%, #FFFFFF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
}

const planStyle: SxProps = {
    paddingTop: "15px",
    backgroundImage: `url(${PricingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: { xs: "contain", sm: "cover" },
    width: "100%",
    minHeight: { xs: "565px", sm: "530px" },
    textAlign: "center",
    alignItems: "center"
}
const pointStyle: SxProps = {
    color: 'F4F0FF',
    minWidth: "250px",
    '.icon': {
        height: '24px',
        witdh: "24px"
    }
}
const pricingItem = ["Networked note-taking", "End to end encryption", "Chrome and Safari web clipper", "Kindle highlights sync", 'Kindle offline sync', "iOS app"]
const Pricing = () => {
    return (
        <Box sx={stylesBox}>
            <Container maxWidth="lg">
                <Box sx={contentStyle}>
                    <Button>Get access</Button>
                    <Typography variant='h3' sx={headingStyle}>We like keeping things simple</Typography>
                    <Typography variant='h3' sx={headingStyle}>One plan one price.</Typography>
                    <Stack sx={planStyle} direction="column" gap={{ xs: 0, sm: 4 }}>
                        <Stack direction="row" justifyContent="center" gap={1} alignItems="center">
                            <Typography sx={headingStyle} variant="h2">$10</Typography>
                            <Stack gap={1}>
                                <Typography sx={headingStyle} variant="subtitle1">/month</Typography>
                                <Typography sx={headingStyle} variant="subtitle1">(if billed annually)</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" justifyContent="center" columnGap={4} rowGap={2} flexWrap="wrap" px={2}>
                            {
                                pricingItem.map((item) => (
                                    <Stack sx={pointStyle} direction="row" gap={1.5}>
                                        <img src={bulletImg} className="icon" />
                                        <Typography sx={headingStyle} color="#F4F0FF" variant="body1">{item}</Typography>
                                    </Stack>
                                ))
                            }
                        </Stack>
                        <Box display="inline-block" component="span">
                            <Button>Start Now</Button>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Pricing