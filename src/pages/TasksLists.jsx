import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import Button from "@mui/material/Button";
import TaskListTable from "../components/TaskListTable";
import SearchBar from "../components/SearchBar";
import { TaskListHeadData } from "../Utilities";
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";


const TasksLists = () => {

  return (
    <>
      <Box height={10} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3
            style={{
              marginTop: "3rem",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "23px",
              letterSpacing: "0.5px",
              color: "#1F384C",
            }}
          >
            Task List
          </h3>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button style={{background: 'rgba(0, 85, 255, 0.1)', width: '169px', height: '48px', fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '12px', color: '#0D80D4'}}>Un-Assigned Tasks</Button>
            <Button style={{background: '#fff', width: '169px', height: '48px',fontStyle: 'normal',fontWeight: '500',fontSize: '12px', color: '#787F89'}}>Assigned Tasks</Button>
            <Button style={{background: '#fff', width: '169px', height: '48px',fontStyle: 'normal',fontWeight: '500',fontSize: '12px', color: '#787F89'}}>Completed Tasks</Button>
          </ButtonGroup>
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
    </>
  );
};

export default TasksLists;
