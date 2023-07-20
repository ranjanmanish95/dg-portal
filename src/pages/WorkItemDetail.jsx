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
import LinearProgress from '@mui/material/LinearProgress';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const MySwal = withReactContent(Swal)
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
  element: {
    animation: '$disappearAppear 1s infinite'
  },
  '@keyframes disappearAppear': {
    '0%, 100%': {
      opacity: 1, /* Fully visible */
    },
    '50%': {
      opacity: 0, /* Fully transparent */
    },
  },
 }));

const ariaLabel = { 'aria-label': 'description' };

function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <h6 className={`classes.element props.value !== 100 ? true: false`}>{props.value !== 100 ? 'Scanning...' : 'Scanning completed'} </h6>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
}

const scanningComplete = () => {
  MySwal.fire('Scanning Complete',
  'Your scan report is ready',
  'success');
};

const approveRequest = () => {
  MySwal.fire('Success',
  'Request Approved!!',
  'success');
};

const rejectRequest = () => {
  MySwal.fire('Reject',
  'Request rejected!!',
  'error');
};

const letterSent = () => {
  MySwal.fire('Success',
  'Letter sent successfully!!',
  'success');
};

const completeRequest = () => {
  MySwal.fire('Success',
  'Request closed successfully!!',
  'success');
};

const WorkItemDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [request, setRequest] = useState({});
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const { requestid } = useParams();
  let interval = undefined;
  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev === 100 ? prev : prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running, interval]);

  useEffect(() => {
    if (progress === 100) {
      clearInterval(interval);
      setRunning(false);
      setProgress(100);
      scanningComplete();
    }
  }, [progress]);

  useEffect(() => {
    let temp = tasklist.filter(e => e.request_id === requestid)[0]
    setRequest(temp)
    setRunning(true)
  }, [])

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Box height={30} />
          <Button style={{ marginTop: "3rem",paddingLeft: '24px', paddingRight: '24px', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '15px', color: '#2474E1'}} onClick={()=>navigate(-1)}>Back</Button>
          <Box sx={{display: 'flex', justifyContent: 'space-between', p: 1, m: 1,}}>
            <h5>Request ID: {request.request_id}</h5>
            <h5>Status: {request.status}</h5>
          </Box> 
          <Grid container spacing={2} style={{paddingLeft: '24px', paddingRight: '24px'}}>
            <Grid item xs={3} style={{marginTop: '1rem'}}>
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>Participant Id:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.participantId || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>PIN:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.pin || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>DOB:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.dob || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <Typography variant="h6" className={classes.subhead}>Request Channel:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.request_channel || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Created Date:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.created_date || ''}/>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} style={{marginTop: '1rem'}}>
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Requestor Name:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.first_name || '' + " " + request.last_name  || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>SSN:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.ssn || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Employee Indicator:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.emp_indicator|| ''} />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Request Type:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.request_type || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Completion Date:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.info_completion_date || ''}/>
              </FormControl>
            </Grid>
            <Grid item xs={1} style={{marginTop: '1rem'}}></Grid>
            <Grid item xs={3} style={{marginTop: '1rem'}}>
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Customer Type:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.entity || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Gender:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.gender || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>City:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.city || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Status:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.status || ''}/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
              <Typography variant="h6" className={classes.subhead}>Assigned To:</Typography>
                <Input inputProps={ariaLabel} className={classes.subInput} value={request.assigned_to || ''}/>
              </FormControl>
            </Grid>
          </Grid>
          <Box height={30} style={{paddingLeft: '24px', paddingRight: '24px', marginTop: '1rem'}}>
            <LinearProgressWithLabel value={progress} />
          </Box>
          
          <Box height={10}/>

          <Box className={classes.footerBtn}>
          <Box>
          <Button variant="contained" className={classes.primaryBtn}>Download Scan Report</Button>
          <Button variant="contained" className={classes.secBtn} onClick={approveRequest}>Approve</Button>
          <Button variant="contained" className={classes.secBtn} onClick={rejectRequest}>Reject</Button>
          <Button variant="contained" className={classes.disBtn} onClick={letterSent}>Letter Sent</Button>
          <Button variant="contained" className={classes.disBtn} onClick={completeRequest}>Complete</Button>
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