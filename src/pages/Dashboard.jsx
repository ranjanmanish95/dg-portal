import React from 'react'
import SideNav from "../SideNav";
import Box from "@mui/material/Box";


const Dashboard = () => {
//   const refreshUrl="http://14.97.142.161:8080/api/refresh-tokens"
//   // let token = '';
//   let ts = new Date().getTime();
//   let data = {

//     "userName": "dg@celestialsys.com",
//     "password": "test",
//     "clientOrgRef": "Data Governance"
// }


// fetch(refreshUrl, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `YELLOWFIN ts=${ts}, nonce=123`,
//         'Accept': 'application/vnd.yellowfin.api-v2+json',
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     },
//     data
// })      
// .then((response) => {
//     console.log('refreshtokendata',response.json());
// })
// .catch((error) => {
//     console.log('error finding user', error);
// })

  return (
    <Box sx={{ display: "flex" }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <iframe title="dashboard" src={`http://14.97.142.161:8080/RunDashboard.i4?dashUUID=d2fa9718-841a-47ed-a4e7-bed742b26aaa`}  width="100%" style={{height:"100vh", marginTop: "3rem"}}></iframe>
       <Box height={20}/>
    </Box>
   </Box>
  )
}

export default Dashboard;