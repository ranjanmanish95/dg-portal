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

const CompletedTasks = (props) => {
  const classes = useStyles();
  const [completedData, setCompletedData] = useState([]);
  const YELLOWFIN_URL="http://192.168.6.56:8080";

  const getTaskListData = ()=>{
    const data = TaskList;
    const completedData = data.filter((item)=>item.status === 'COMPLETED');
    setCompletedData(completedData);
   }

   useEffect(()=>{
    getTaskListData();
    },[]);
  return (
    <>
     <iframe title="dashboard" src={`${YELLOWFIN_URL}/RunDashboard.i4;?dashUUID=4fa1a74b-bfb8-42fa-9249-70d0bf4b2cc8&primaryOrg=1&clientOrg=1`} width="100%" style={{height:"50vh", border: "none"}}></iframe>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div style={{marginTop: "-10rem"}}>
      <Typography variant="h1" className={classes.headingone}>List of Completed Tasks</Typography>   
      <Box sx={{ width: '100%' }}>
      <Grid xs={12} lg={12} md={12} className='invoice-summary'/>
      <Box height={40} />  
      <Grid container spacing={2}>
            <Grid item xs={4} className={classes.searchBarStyle}>
            <SearchBar />
            </Grid>
      </Grid>
      <Box height={20} />
      <TaskListTable data={completedData} value="Completed"/>
    </Box> 
    </div>
        </Box>
      </Box>
    </>
  );
};

export default CompletedTasks;
