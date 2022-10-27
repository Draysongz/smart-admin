import React, { useContext } from 'react';
import Login from './Pages/Login';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/AuthContext';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';



function App() {

 console.log(process.env.REACT_APP_FIRE_API_KEY)
 console.log(process.env)
  const {currentUser}= useContext(AuthContext)

  const RequireAuth = ({children})=>{
    return currentUser ? (children ): <Navigate to ='/login'/>}
console.log(process.env.FIRE_API_KEY)
    console.log(currentUser)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={
          <RequireAuth>
          <Dashboard/>
          </RequireAuth>
          }/>
          <Route path='/users' element={
          <RequireAuth>
          <Users/>
          </RequireAuth>
          }/>
        </Routes>
      </Router>
    
      <ToastContainer/>
    </div>
  );
}

export default App;
