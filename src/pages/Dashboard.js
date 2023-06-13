import React from 'react'
import SideNav from "../SideNav";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h3 style={{ marginTop: "4rem", fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '18px',lineHeight: '23px',letterSpacing: '0.5px', color: '#1F384C' }}>My Dashboard</h3>
       <Box height={20} />
    </Box>
  </Box>
  )
}

export default Dashboard;