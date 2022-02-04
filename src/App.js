// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// styles
import './scss/base.scss'
import './scss/utilities.scss'
// pages & components
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Dashboard from './pages/dashboard/Dashboard'
import Timer from './pages/timer/Timer'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <div className='d-f'>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='/create' 
              element={<Create />} 
            />
            <Route 
              path='/dashboard' 
              element={<Dashboard />} 
            />
            <Route 
              path='/timer/:id' 
              element={<Timer />} 
            />
            <Route 
              path='/signup' 
              element={<Signup />} 
            />
            <Route 
              path='/login' 
              element={<Login />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
