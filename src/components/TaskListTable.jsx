import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import TaskList from '../Tasklist';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() => ({
 tableStyles: {
border: '1px solid #CECECE',
'& .rdt_TableHead': {
  backgroundImage: 'linear-gradient(red, yellow)',
}
 },
}));

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
};

const TaskListTable = (props) => {
  const classes = useStyles();
    const [tasklists, setTaskLists] = useState([]);
    const navigate = useNavigate();

   const getTaskListData = ()=>{
    const data = TaskList.filter(e => props.status === "Pending" ? e.status === "IN PROCESS" : e.status === "COMPLETED");
    setTaskLists(data);
   }

   const columns = [
    {
      name: "Request ID",
      selector: (row) => row.request_id,
    },
    {
      name: "PIN",
      selector: (row)=> row.pin,  
    },
    {
      name: "Requestor Name",
      selector: (row)=> row.first_name + " " + row.last_name,  
    },
    {
      name: "Entity",
      selector: (row)=> row.entity,  
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
      name: props.status === "Pending" ? "Due Date" : "Completion Date",
      selector: (row)=> props.status === "Pending" ? row.request_type === "REQ_INFO" ? addDays(row.created_date, 15) : addDays(row.created_date, 45) : 
      row.request_type === "REQ_INFO" ? row.info_completion_date : row.delete_completion_date,  
    },
    {
      name: "Action",
      selector: (row)=> <div>
        <EditIcon onClick={()=>{navigate(`/myworkitems/${row.request_id}`)}} style={{color:'blue', cursor: 'pointer'}}/>
        <DeleteIcon style={{color:'#000000DE', cursor: 'pointer'}}/></div>,  
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









// import React from "react";
// import DataTable from "react-data-table-component";
// import Button from '@mui/material/Button';
// import {useNavigate} from 'react-router-dom';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(() => ({
//  tableStyles: {
// border: '1px solid #CECECE',
// '& .rdt_TableHead': {
//   backgroundImage: 'linear-gradient(red, yellow)',
// }
//  },
// }));

// const TaskListTable = (props) => {
//   const tasklistdata = props.data;
//   const classes = useStyles();
//   const navigate = useNavigate();

//    const columns = [
//     {
//       name: "Request ID",
//       cell: (row)=> 
//       <Button onClick={(row)=>{navigate(`/myworkitems/requestid`)}}>{row.request_id}</Button>,  
//     },
//     {
//       name: "Participant ID",
//       selector: (row)=> row.participantId,  
//     },
//     {
//       name: "PIN",
//       selector: (row)=> row.pin,  
//     },
//     {
//       name: "Requestor Name",
//       selector: (row)=> row.request_channel,  
//     },
//     {
//       name: "Equity",
//       selector: (row)=> "TIAA Only",  
//     },
//     {
//       name: "Request Type",
//       selector: (row)=> row.request_type,  
//     },
//     {
//       name: "Status",
//       selector: (row)=> row.status,  
//     },
//     {
//       name: "Created Date",
//       selector: (row)=> row.created_date,  
//     },
//     {
//       name: "Due Date",
//       selector: (row)=> row.info_completion_date,  
//     },
//     {
//       name: "Action",
//       selector: (row)=> "Claim",  
//     },
//    ];

//     return (
//     <>
//     <DataTable columns={columns} data={tasklistdata} pagination fixedHeader className={classes.tableStyles}/>
//     </>
//     )
// }

// export default TaskListTable;