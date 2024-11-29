import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Opentickets from './components/Opentickets';

function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path='/opentickets' element={<Opentickets/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
