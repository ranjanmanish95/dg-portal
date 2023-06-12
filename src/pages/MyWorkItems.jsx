import React from "react";
import Box from "@mui/material/Box";
import SideNav from "../SideNav";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormControl, InputLabel} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Box height={30} />
          <p style={{ marginTop: "3rem",paddingLeft: '24px', paddingRight: '24px', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '15px', color: '#2474E1'}}>Back to My Work Items</p>
          <Grid container spacing={2} style={{paddingLeft: '24px', paddingRight: '24px'}}>
            <Grid item xs={3}>
            <h3>PR000311190 - PIN: N/A</h3>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="request-id">
                  Request Id:
                </InputLabel>
                <BootstrapInput defaultValue="" id="request-id"/>
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="participant-requestid">
                  Participant RequestId:
                </InputLabel>
                <BootstrapInput defaultValue="" id="participant-requestid" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="customer-type">
                  Customer Type:
                </InputLabel>
                <BootstrapInput defaultValue="" id="customer-type" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="request-channel">
                  Request Channel:
                </InputLabel>
                <BootstrapInput defaultValue="" id="request-channel" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="dsr-id">
                  DSR Id:
                </InputLabel>
                <BootstrapInput defaultValue="" id="dsr-id" />
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} style={{marginTop: '4rem'}}>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="status">
                  Status:
                </InputLabel>
                <BootstrapInput defaultValue="" id="status" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="ssn">
                  SSN:
                </InputLabel>
                <BootstrapInput defaultValue="" id="ssn" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="employee-indicator">
                  Employee Indicator:
                </InputLabel>
                <BootstrapInput defaultValue="" id="employee-indicator" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="date-of-birth">
                  Date of Birth:
                </InputLabel>
                <BootstrapInput defaultValue="" id="date-of-birth" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="validity">
                  Validity:
                </InputLabel>
                <BootstrapInput defaultValue="" id="validity" />
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
             <h3>Status: IN PROCESS</h3>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="pin">
                  PIN:
                </InputLabel>
                <BootstrapInput defaultValue="" id="pin" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="requestor-name">
                  Requestor Name:
                </InputLabel>
                <BootstrapInput defaultValue="" id="requestor-name" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="requestor-type">
                  Request Type:
                </InputLabel>
                <BootstrapInput defaultValue="" id="request-type" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="created-date">
                  Created Date:
                </InputLabel>
                <BootstrapInput defaultValue="" id="created-date" />
              </FormControl>
              <Box height={30} />
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="scenerio-code">
                  Scenerio Code:
                </InputLabel>
                <BootstrapInput defaultValue="" id="scenerio-code" />
              </FormControl>
            </Grid>
          </Grid>
          <Box height={30} />
          <hr style={{backgroundColor: '#7B7B7B'}}/>
          <Box height={10} />
          <Grid container spacing={2} style={{paddingLeft: '24px', paddingRight: '24px'}}>
          <Grid item xs={9}>
          <Stack spacing={1} direction="row"> 
          <Button variant="contained">Generate Document</Button>
          <Button variant="contained" style={{background: 'rgba(0, 85, 255, 0.1)', color: '#0D80D4'}}>QC Approve</Button>
          <Button variant="contained" style={{background: 'rgba(0, 85, 255, 0.1)', color: '#0D80D4'}}>QC Reject</Button>
          <Button variant="contained" style={{background: '#E6E6E6', color: '#565656'}}>Letter Sent</Button>
          <Button variant="contained" style={{background: '#E6E6E6', color: '#565656'}}>Complete</Button> 
          </Stack> 
          </Grid>
          <Grid item xs={3} style={{display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" style={{background: 'rgba(255, 179, 179, 0.3)', color: '#D60000', border: '1px solid #D60000'}}>Unclaim</Button> 
          </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
