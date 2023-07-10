import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import TaskListTable from "../components/TaskListTable";
import SearchBar from "../components/SearchBar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import TaskList from '../Tasklist';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles(() => ({
  headingone: {
    color: '#1976d2',
    fontSize: '21px !important',
    textAlign: 'center',
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
  },
  searchBarStyle: {
    margin: '10px auto 20px auto !important',
    '& .MuiTextField-root': {
      backgroundColor: '#fff',
    },
  },
}));

const TasksLists = (props) => {
  const classes = useStyles();
  const [completedData, setCompletedData] = useState([]);
  const loginToken = props.loginToken;
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
      <Box height={10} />
      <Box>
        <SideNav loginToken={loginToken}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h1" className={classes.headingone}>My Work Items</Typography>
    <Box sx={{ width: '100%' }}>
      <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={4} className={classes.searchBarStyle}>
            <SearchBar />
            </Grid>
          </Grid>
          <Box height={20} />
          <TaskListTable data={completedData}/>
    </Box>
        </Box>
      </Box>
    </>
  );
};

export default TasksLists;
