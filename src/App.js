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
// context 
import { useAuthContext } from './hooks/useAuthContext'
// theme
import ThemeSelector from './components/themeselector/ThemeSelector'
import { useTheme } from './hooks/useTheme'

const App = () => {

  const { user } = useAuthContext()
  const { theme } = useTheme()
  
  return (
    <div className={`${theme} d-f`}>
      <BrowserRouter>
        {user && <Sidebar />}
        <div className='container'>
          <Navbar />
          <ThemeSelector />
          <Routes>
            <Route 
              path='/' 
              element={user ? <Home /> : <Navigate to='/login' />} 
            />
            <Route 
              path='/create' 
              element={user ? <Create /> : <Navigate to='/login' />} 
            />
            <Route 
              path='/dashboard' 
              element={user ? <Dashboard /> : <Navigate to='/login' />} 
            />
            <Route 
              path='/timer/:id' 
              element={user ? <Timer /> : <Navigate to='/login' />} 
            />
            <Route 
              path='/signup' 
              element={user ? <Navigate to='/' /> : <Signup />} 
            />
            <Route 
              path='/login' 
              element={user ? <Navigate to='/' /> : <Login />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
