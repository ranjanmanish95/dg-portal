import React, {useState,useEffect} from 'react'
import SideNav from "../SideNav";
import Box from "@mui/material/Box";


const Dashboard = () => {
// const [html, setHtml] = useState('')
// const [css, setCss] = useState('')
// const [js, setJs] = useState('')
// const [srcDoc, setSrcDoc] = useState('')  
// const [accessToken, setAccessToken] = useState('')
const [refreshToken, setRefreshToken] = useState('')
// const [loginToken, setLoginToken] = useState('')

const refresh_url="http://14.97.142.161:8080/api/refresh-tokens";

//   useEffect(()=>{
//     const timeout = setTimeout(() => {
//       setSrcDoc(`
//         <html>
//           <body>${html}</body>
//           <style>${css}</style>
//           <script>${js}</script>
//         </html>
//       `)
//     }, 250)
//     return () => clearTimeout(timeout)
//   }, [html, css, js]) 

  function getRefreshToken(){

    // fetch('refresh_token')
    //   .then(response => response.json())
    //   .then(data => {
    //     setRefreshToken(data)
    //   });
    
    let ts = new Date().getTime();

    let data = {
      userName: "dg@celestialsys.com",
      password: "test",
      clientOrgRef: "Data Governance"
     }

    fetch(refresh_url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `YELLOWFIN ts=${ts}, nonce=123`,
        'Accept': 'application/vnd.yellowfin.api-v2+json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
})      
.then((response) => response.json())
.then((data)=>{
  console.log('refreshtokendata', data);
}) 
.catch((error) => {
    console.log('error finding user', error);
})
  }

 useEffect(()=>{
  getRefreshToken();
 })

//   function getAccessToken(){
//     fetch('access_token?refresh_token='+encodeURIComponent(refreshToken))
//       .then(response => response.json())
//       .then(data => {
//         setAccessToken(data)
//       });
//   }
//   function getLoginToken(){
//     fetch('login_token?access_token='+encodeURIComponent(accessToken))
//       .then(response => response.json())
//       .then(data => {
//         setLoginToken(data)
//       });
//   }
  // <script type="text/javascript" src="http://localhost/JsAPI?dashUUID=e9a6ab0a-bcb0-4fe6-9663-4dd33e58f08e&token=<TOKEN>"></script>

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