import React from 'react';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';


const stats = [
  {
    percentage: '90',
    description: "Saves over 90% of time wasted on cold calling"
  },
  {
    percentage: '60',
    description: 'Reduction in per order costs by 60-90%'
  },
  {
    percentage: '35',
    description: "Increase profit margins by over 35%."
  },
  {
    percentage: '80',
    description: 'Increase converseion rate by over'
  }
];

const StatsSection = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h3" sx={{ color: 'white', marginY: 4 }}>
        Anicca.bot by the Numbers
      </Typography> */}
      <Typography
        variant="h2"
        textAlign="center"
        color={"#ffffffde"}
        sx={{ mt: 1.5 ,my:4}}
      >
        Anicca.bot by the Numbers
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: {xs:'flex-start',md:'center'},
          gap: 2,
          my:6,
          pl:{xs:4,md:0}
        }}
      >
        {stats.map((stat, index) => (
          <Box key={index} display='flex' alignItems={'center'} width={'300px'}>
            <Typography variant="h3" component="p" sx={{ color: '#6B26FF' ,textAlign:'left'}}>
              <CountUp end={Number(stat.percentage)} delay={0.2} />%
            </Typography>
            <Box
              sx={{
                height: '50px',
                width: '1px',
                backgroundColor: 'white',
                marginX: 2,
              }}
            />
            <Typography variant="body1" sx={{ color: 'white',textAlign:'left' }}>
              {stat.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatsSection;
