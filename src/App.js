import logo from './logo.svg';
import './App.css';
import MyWorkItems from './pages/MyWorkItems';
import TasksLists from './pages/TasksLists';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WorkItemDetail from './pages/WorkItemDetail';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' exact element={<MyWorkItems/>}/>
       <Route path='/taskslists' exact element={<TasksLists/>}/>
       {/* <WorkItemDetail/> */}
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
