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


function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path='/opentickets' element={<Opentickets/>}/>
        <Route path='/closedtickets' element={<Closedtickets/>}/>
        <Route path='/viewproject' element={<Viewproject/>}/>
        <Route path='/ticketapprovals' element={<TicketApprovals/>}/>
        <Route path='/accountsettings' element={<AccountSettings/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productivity' element={<Productivity/>}/>
        <Route path='/assignedtickets' element={<AssignedTickets/>}/>
        <Route path='/actionedtickets' element={<ActionedTickets/>}/>
        


      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
