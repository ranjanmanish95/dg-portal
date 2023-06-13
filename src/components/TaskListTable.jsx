import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import TaskList from '../Tasklist';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
 tableStyles: {
border: '1px solid #CECECE',
'& .rdt_TableHead': {
  backgroundImage: 'linear-gradient(red, yellow)',
}
 },
}));

const TaskListTable = (props) => {
  const classes = useStyles();
    const [tasklists, setTaskLists] = useState([]);
    const navigate = useNavigate();

   const getTaskListData = ()=>{
    const data = TaskList;
    setTaskLists(data);
   }

   const columns = [
    {
      name: "Request ID",
      cell: (row)=> 
      <Button onClick={(row)=>{navigate(`/myworkitems/requestid`)}}>{row.request_id}</Button>,  
    },
    {
      name: "Participant ID",
      selector: (row)=> row.participantId,  
    },
    {
      name: "PIN",
      selector: (row)=> row.pin,  
    },
    {
      name: "Requestor Name",
      selector: (row)=> row.request_channel,  
    },
    {
      name: "Equity",
      selector: (row)=> "TIAA Only",  
    },
    {
      name: "Request Type",
      selector: (row)=> row.request_type,  
    },
    {
      name: "Status",
      selector: (row)=> row.status,  
    },
    {
      name: "Created Date",
      selector: (row)=> row.created_date,  
    },
    {
      name: "Due Date",
      selector: (row)=> row.info_completion_date,  
    },
    {
      name: "Action",
      selector: (row)=> "Claim",  
    },
   ];

   useEffect(()=>{
   getTaskListData(); 
   },[]);

    return (
    <>
    <DataTable columns={columns} data={tasklists} pagination fixedHeader className={classes.tableStyles}/>
    </>
    )
}

export default TaskListTable;