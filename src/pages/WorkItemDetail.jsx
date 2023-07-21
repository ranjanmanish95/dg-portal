import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import Button from "@mui/material/Button";
import { FormControl, Typography} from "@mui/material";
import Input from '@mui/material/Input';
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import {useNavigate} from 'react-router-dom';
import tasklist from '../Tasklist';

const useStyles = makeStyles(() => ({
  subhead: {
 color: '#616161',
  },
  subInput: {
    fontSize: '14px !important',
    border: '1px solid #C4C4C4',
    borderRadius: '2px',
    padding: '6px 6px 6px 6px',
    marginTop: '4px',
    width: '320px',
      '&:before': {
        borderBottom: 'none !important',
      },
  },
  footerBtn: {
    position: 'fixed',
    bottom: '12px',
    width: '85%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px',
  },
  primaryBtn: {
    textTransform: 'unset !important',
    backgroundColor: '##0D80D4 !important', 
    boxShadow: 'unset !important',
    margin: '6px !important',
  },
  secBtn: {
    backgroundColor: '#0055FF1A !important', 
    textTransform: 'unset !important',
    color: '#0D80D4 !important',
    boxShadow: 'unset !important',
    margin: '6px !important',
  },
  disBtn: {
    backgroundColor: '#E6E6E6 !important', 
    textTransform: 'unset !important',
    color: '#565656 !important',
    boxShadow: 'unset !important',
    margin: '6px !important',
  },
  redBtn: {
    backgroundColor: '#FFB2B24D !important', 
    textTransform: 'unset !important',
    color: '#D60000 !important', 
    border: '1px solid #D60000 !important',
    boxShadow: 'unset !important',
    margin: '6px !important',
  },
 }));

const ariaLabel = { 'aria-label': 'description' };

const WorkItemDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [request, setRequest] = useState({});
  useEffect(() => {
    let temp = tasklist.filter(e => e.request_id === "PR0000205789")[0]
    setRequest(temp)
  }, [])
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Box height={30} />
          <Button style={{ marginTop: "3rem",paddingLeft: '24px', paddingRight: '24px', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '15px', color: '#2474E1'}} onClick={()=>navigate('/myworkitems')}>Back to My Work Items</Button>
          <Grid container spacing={2} style={{paddingLeft: '24px', paddingRight: '24px'}}>
            <Grid item xs={3}>
            <h3>Request ID: {request.request_id}</h3>
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>Request Id:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.request_id}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>PIN:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.pin}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>DOB:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.dob}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>Request Channel:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.request_channel}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Created Date:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.created_date}/>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} style={{marginTop: '3rem'}}>
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Requestor Name:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.first_name + " " + request.last_name}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>SSN:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.ssn}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Employee Indicator:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.emp_indicator}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Request Type:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.request_type}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Completion Date:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.info_completion_date}/>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
             <h3>Status: {request.status}</h3>
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Customer Type:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.entity}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Gender:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.gender}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>City:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.city}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Status:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.status}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Assigned To:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.assigned_to}/>
              </FormControl>
            </Grid>
          </Grid>
          <Box height={30} />
         
          <Box height={10}/>

          <Box className={classes.footerBtn}>
          <Box>
          <Button variant="contained" className={classes.primaryBtn}>Download Scan Report</Button>
          <Button variant="contained" className={classes.secBtn}>Approve</Button>
          <Button variant="contained" className={classes.secBtn}>Reject</Button>
          <Button variant="contained" className={classes.disBtn}>Letter Sent</Button>
          <Button variant="contained" className={classes.disBtn}>Complete</Button>
          </Box>
          <Box>
          <Button variant="contained" className={classes.redBtn}>Unclaim</Button> 
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WorkItemDetail;



// import React from 'react'
// import Box from "@mui/material/Box";
// import SideNav from "../SideNav";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { FormControl, InputLabel, Typography} from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import { alpha, styled } from "@mui/material/styles";
// import Input from '@mui/material/Input';
// import { makeStyles } from '@mui/styles';
// import Grid from "@mui/material/Grid";
// import {useNavigate} from 'react-router-dom';


// const useStyles = makeStyles(() => ({
//   subhead: {
//  color: '#616161',
//   },
//   subInput: {
//     fontSize: '14px !important',
//     border: '1px solid #C4C4C4',
//     borderRadius: '2px',
//     padding: '6px 6px 6px 6px',
//     marginTop: '4px',
//     width: '320px',
//       '&:before': {
//         borderBottom: 'none !important',
//       },
//   },
//   footerBtn: {
//     position: 'fixed',
//     bottom: '12px',
//     width: '85%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '6px',
//   },
//   primaryBtn: {
//     textTransform: 'unset !important',
//     backgroundColor: '##0D80D4 !important', 
//     boxShadow: 'unset !important',
//     margin: '6px !important',
//   },
//   secBtn: {
//     backgroundColor: '#0055FF1A !important', 
//     textTransform: 'unset !important',
//     color: '#0D80D4 !important',
//     boxShadow: 'unset !important',
//     margin: '6px !important',
//   },
//   disBtn: {
//     backgroundColor: '#E6E6E6 !important', 
//     textTransform: 'unset !important',
//     color: '#565656 !important',
//     boxShadow: 'unset !important',
//     margin: '6px !important',
//   },
//   redBtn: {
//     backgroundColor: '#FFB2B24D !important', 
//     textTransform: 'unset !important',
//     color: '#D60000 !important', 
//     border: '1px solid #D60000 !important',
//     boxShadow: 'unset !important',
//     margin: '6px !important',
//   },
//  }));

// const ariaLabel = { 'aria-label': 'description' };

// const WorkItemDetail = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <SideNav />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{paddingLeft: '0px', paddingRight: '0px'}}>
//         <Box height={30} />
//           <Button style={{ marginTop: "3rem",paddingLeft: '24px', paddingRight: '24px', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '15px', color: '#2474E1'}} onClick={()=>navigate('/myworkitems')}>Back to My Work Items</Button>
//           <Grid container spacing={2} style={{paddingLeft: '24px', paddingRight: '24px'}}>
//             <Grid item xs={3}>
//             <h3>PR000311190 - PIN: N/A</h3>
//               <FormControl variant="standard">
//                 <Typography variant="h6" className={classes.subhead}>Request Id:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//                 <Typography variant="h6" className={classes.subhead}>Participant RequestId:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//                 <Typography variant="h6" className={classes.subhead}>Customer Type:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//                 <Typography variant="h6" className={classes.subhead}>Request Channel:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>DSR Id:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//             </Grid>
//             <Grid item xs={1}></Grid>
//             <Grid item xs={3} style={{marginTop: '3rem'}}>
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Status:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>SSN:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Employee Indicator:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Date of Birth:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Validity:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//             </Grid>
//             <Grid item xs={1}></Grid>
//             <Grid item xs={3}>
//              <h3>Status: IN PROCESS</h3>
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>PIN:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Requestor Name:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Request Type:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Created Date:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//               <Box height={30} />
//               <FormControl variant="standard">
//               <Typography variant="h6" className={classes.subhead}>Scenerio Code:</Typography>
//                 <Input inputProps={ariaLabel} className={classes.subInput}/>
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Box height={30} />
         
//           <Box height={10}/>

//           <Box className={classes.footerBtn}>
//           <Box>
//           <Button variant="contained" className={classes.primaryBtn}>Generate Document</Button>
//           <Button variant="contained" className={classes.secBtn}>QC Approve</Button>
//           <Button variant="contained" className={classes.secBtn}>QC Reject</Button>
//           <Button variant="contained" className={classes.disBtn}>Letter Sent</Button>
//           <Button variant="contained" className={classes.disBtn}>Complete</Button>
//           </Box>
//           <Box>
//           <Button variant="contained" className={classes.redBtn}>Unclaim</Button> 
//           </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default WorkItemDetail;