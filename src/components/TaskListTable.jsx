import React from "react";
import DataTable from "react-data-table-component";
import Button from '@mui/material/Button';
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

const TaskListTable = (props) => {
  const tasklistdata = props.data;
  const classes = useStyles();
  const navigate = useNavigate();

   const columns = [
    {
      name: "Request ID",
      cell: (row)=> 
      <Button onClick={(row)=>{navigate(`/myworkitems/${row.requestid}`)}}>{row.request_id}</Button>,  
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
      name: "Completion Date",
      selector: (row)=> row.info_completion_date,  
    },
    {
      name: "Action",
      selector: (row)=> <div><EditIcon onClick={()=>{navigate(`/myworkitems/${row.request_id}`)}}/> <DeleteIcon /></div>,  
    },
   ];


    return (
    <>
    <DataTable columns={columns} data={tasklistdata} pagination fixedHeader className={classes.tableStyles}/>
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