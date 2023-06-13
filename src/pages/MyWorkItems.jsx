import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import Button from "@mui/material/Button";
import TaskListTable from "../components/TaskListTable";
import SearchBar from "../components/SearchBar";
import { TaskListHeadData } from "../Utilities";
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box height={10} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h1" className={classes.headingone}>My Work Items</Typography>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Un-Assigned Tasks" {...a11yProps(0)} />
          <Tab label="Assigned Tasks" {...a11yProps(1)} />
          <Tab label="Completed Tasks" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
            <SearchBar />
            </Grid>
          </Grid>
          <Box height={20} />
          <TaskListTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
      Assigned Tasks
      </TabPanel>
      <TabPanel value={value} index={2}>
      Completed Tasks
      </TabPanel>
    </Box>
       
        </Box>
      </Box>
    </>
  );
};

export default TasksLists;
