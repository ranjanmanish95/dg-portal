import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import TaskListTable from "../components/TaskListTable";
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import TaskList from '../Tasklist';
import SearchBar from "../components/SearchBar";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(() => ({
  headingone: {
    marginTop: '3rem !important',
    color: '#1F384C',
  },
  btngroup: {
    border: '1px solid #d4d4d4',
    boxShadow: 'none !important',
    borderRadius: 'unset !important',
    '& button': {
      borderRight: 'unset !important',
    },
  },
  selectedbtn: {
    background: '#0055FF1A !important', 
    width: '180px !important', 
    borderRadius: 'unset !important',
    height: '48px', 
    fontStyle: 'normal',
    fontSize: '12px', 
    color: '#0D80D4 !important',
    borderBottom: '2px solid #0071BC !important',
  },
  otherbtn: {
    background: '#fff !important', 
    width: '169px', 
    height: '48px',
    fontStyle: 'normal',
    fontSize: '12px', 
    color: '#787F89 !important'
  }
}));

const TasksLists = () => {
  const classes = useStyles();
  const [pendingData, setPendingData] = useState([]);
  
  const getTaskListData = ()=>{
    const data = TaskList;
    const pendingData = data.filter((item)=>item.status === 'IN PROCESS' || item.status === 'LETTER SENT');
    setPendingData(pendingData);
   }

   useEffect(()=>{
    getTaskListData(); 
    },[]);


  return (
    <>
      <Box height={10} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h1" className={classes.headingone}>Pending Tasks</Typography>
          <Box height={40} />  
          <Grid container spacing={2}>
          <Grid item xs={4} className={classes.searchBarStyle}>
          <SearchBar />
          </Grid>
      </Grid>
      <Box height={20} />
          <TaskListTable data={pendingData} status="Pending"/>      
        </Box>
      </Box>
    </>
  );
};

export default TasksLists;
