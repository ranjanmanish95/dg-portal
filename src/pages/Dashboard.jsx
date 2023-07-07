/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react'
import SideNav from "../SideNav";
import Box from "@mui/material/Box";

const Dashboard = () => {

  const [loginToken, setLoginToken] = useState('');
  const LOGIN_TOKEN_URL = 'http://localhost:5000/loginToken';
  // const YELLOWFIN_URL="http://14.97.142.161:8080";

  const fetchLoginToken = async ()=>{
    const loginResponse = await fetch(LOGIN_TOKEN_URL);
    const loginData = await loginResponse.json();
    const loginToken = loginData.loginToken;
    setLoginToken(loginToken);
  }

  useEffect(()=>{
   fetchLoginToken();
  //  window.yellowfin.loadDashboardAPI().then(() => { 
  //   window.yellowfin.dashboards.loadDashboard({ 
  //     dashboardUUID: "d2fa9718-841a-47ed-a4e7-bed742b26aaa", 
  //     element:  document.querySelector('#YellowfinDiv'),
  //               showShare: false,
  //   }).then(dashboard => { 	});
  //   })
  //   window.yellowfin.init().then(() => {
  //     //The Yellowfin base API has now loaded. Now load a report
  //     window.yellowfin.loadReport({
  //               reportId: 'c83357db-8aef-4ec7-ab72-fce34de9ee77',
  //               element: document.querySelector('div#reportDiv'),
  //      });
  //   });
  },[]);
  
  return (
    <Box>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}> 
    {/* <iframe title="dashboard" src={`http://14.97.142.161:8080/RunDashboard.i4?dashUUID=d2fa9718-841a-47ed-a4e7-bed742b26aaa&token=${loginToken}`}  width="100%" style={{height:"100vh", marginTop: "3rem"}}></iframe> */}
    {/* <div id="YellowfinDiv"></div> */}
    <Box height={20}/>
    </Box>
   </Box>
  )
}

export default Dashboard;