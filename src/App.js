import './App.css';
import MyWorkItems from './pages/MyWorkItems';
import TasksLists from './pages/TasksLists';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WorkItemDetail from './pages/WorkItemDetail';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/dashboard' exact element={<Dashboard/>}/>
       <Route path='/myworkitems' exact element={<MyWorkItems/>}/>
       <Route path='/myworkitems/requestid' element={<WorkItemDetail/>}/>
       <Route path='/taskslists' element={<TasksLists/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
