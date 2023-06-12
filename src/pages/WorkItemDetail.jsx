import React from 'react'
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import MuiTable from "../components/MuiTable";
import SearchBar from "../components/SearchBar";
import { TaskListHeadData } from "../Utilities";

const WorkItemDetail = () => {
  return (
    <Box sx={{ display: "flex" }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h3 style={{ marginTop: "3rem" }}>My Work Items</h3>
       <Box height={20} />
       <SearchBar/>
       <Box height={20} />
       {/* <MuiTable taskData={TaskListHeadData}/> */}
    </Box>
  </Box>
  )
}

export default WorkItemDetail;