import React from 'react'
import SideNav from "../SideNav";
import Box from "@mui/material/Box";
import '../App.css';

const Dashboard = () => {
  const YELLOWFIN_URL="http://192.168.6.56:8080";

  return (
    <Box sx={{ display: "flex" }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Box height={20} />  
    <iframe title="dashboard" src={`${YELLOWFIN_URL}/RunDashboard.i4?dashUUID=a2626f28-24c9-4b9f-b201-8063a71a0a71&primaryOrg=1&clientOrg=1`} width="105%" 
      style={{height:"270vh", border: "none", marginLeft:"-4rem"}}></iframe>
    </Box>
  </Box>
  )
}

export default Dashboard;