import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Productivity from './components/Productivity';
import AssignedTickets from './components/AssignedTickets';
import Opentickets from './components/Opentickets';
import Closedtickets from './components/Closedtickets';
import Viewproject from './components/Viewprojects';
import ActionedTickets from './components/ActionedTickets';
import TicketApprovals from './components/TicketApprovals';
import AccountSettings from './components/AccountSettings';
import Editaccountsettings from './components/Editaccountsettings';
import Privacyaccountsettings from './components/Privacyaccountsettings';
import ActionTickets from './components/Sheets/ActionTickets';
import AdminTeamMonitoring from './components/projectmanager/AdminTeamMonitoring';
import EscalatedReport from './components/projectmanager/EscalatedReport';
import TeamManagementSheet from './components/projectmanager/TeamManagementSheet';
import Taskmanagement from './components/projectmanager/Taskmanagement';






function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
 
        <Route path="/" element={<Layout />}> 
        <Route index element={<Dashboard/>}/>
        <Route path='/productivity' element={<Productivity/>}/>
        <Route path='/opentickets' element={<Opentickets/>}/>
        <Route path='/closedtickets' element={<Closedtickets/>}/>
        <Route path='/viewproject' element={<Viewproject/>}/>
        <Route path='/ticketapprovals' element={<TicketApprovals/>}/>
        <Route path='/assignedtickets' element={<AssignedTickets/>}/>
        <Route path='/accountsettings' element={<AccountSettings/>}/>
        <Route path='/editaccountsettings' element={<Editaccountsettings/>}/>
        <Route path='/adminteammonitoring' element={<AdminTeamMonitoring/>}/>
        <Route path='/escalatedreports' element={<EscalatedReport/>}/>
        <Route path='/teammanagement' element={<Taskmanagement/>}/>
        <Route path='/actionedtickets' element={<ActionedTickets/>}/>
       
        </Route>
       
        <Route path='/login' element={<Login/>}/>
        <Route path='/productivity' element={<Productivity/>}/>
        
        
        <Route path='/privacyaccountsettings' element={<Privacyaccountsettings/>}/>
        <Route path='/actiontickets' element={<ActionTickets/>}/>
        <Route path='/tsheet' element={<TeamManagementSheet/>}/>
        
        

        
        
        


      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
