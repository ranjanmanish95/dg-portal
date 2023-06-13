import React from 'react'
import SideNav from "../SideNav";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  headingone: {
    marginTop: '3rem !important',
    color: '#1F384C',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Typography variant="h1" className={classes.headingone}>Dashboard</Typography>
       <Box height={20} />
    </Box>
  </Box>
  )
}

export default Dashboard;