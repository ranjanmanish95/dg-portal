import './App.css';
import MyWorkItems from './pages/MyWorkItems';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TasksLists from './pages/TasksLists';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WorkItemDetail from './pages/WorkItemDetail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
const theme = createTheme({
});

theme.typography.h1 = {
  fontFamily: 'Poppins-Medium',
  fontSize: '18px',
};
theme.typography.h2 = {
  fontFamily: 'Poppins-Medium',
  fontSize: '16px',
};
theme.typography.h3 = {
  fontFamily: 'Poppins-Medium',
  fontSize: '14px',
};
theme.typography.h4 = {
  fontFamily: 'Poppins-Regular',
  fontSize: '15px',
};
theme.typography.h5 = {
  fontFamily: 'Poppins-Regular',
  fontSize: '14px',
};
theme.typography.h6 = {
  fontFamily: 'Poppins-Regular',
  fontSize: '12px',
};
theme.typography.body2 = {
  fontFamily: 'Poppins-Medium',
  fontSize: '12px',
};
theme.typography.body1 = {
  fontFamily: 'Poppins-Regular',
  fontSize: '11px',
};

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     <Routes>
       <Route path='/login' exact element={<Login/>}/>
       <Route path='/dashboard' exact element={<Dashboard/>}/>
       <Route path='/myworkitems' element={<MyWorkItems/>}/>
       <Route path='/myworkitems/requestid' element={<WorkItemDetail/>}/>
       <Route path='/taskslists' exact element={<TasksLists/>}/>
     </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
