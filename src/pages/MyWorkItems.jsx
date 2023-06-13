import React from 'react'
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import MuiTable from "../components/MuiTable";
import SearchBar from "../components/SearchBar";
import TaskListTable from "../components/TaskListTable";
import { TaskListHeadData } from "../Utilities";
import Grid from "@mui/material/Grid";

const MyWorkItems = () => {
  return (
    <Box sx={{ display: "flex" }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h3 style={{ marginTop: "4rem", fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '18px',lineHeight: '23px',letterSpacing: '0.5px', color: '#1F384C' }}>My Work Items</h3>
       <Box height={20} />
       <Grid container spacing={2}>
          <Grid item xs={3}>
          <SearchBar />
          </Grid>
        </Grid>
       <Box height={20} />
       <TaskListTable />
    </Box>
  </Box>
  )
}

export default MyWorkItems;