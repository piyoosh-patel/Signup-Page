import React from 'react';
import './App.css'

import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Routes, Route,Navigate   } from "react-router-dom";
import SignupForm from './components/SignupForm';
import DashBoard from './components/DashBoard';
import FirstPage from './components/FirstPage';
import Cookies from 'js-cookie';


function App() {
  
  // const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) === true;   //using localstorage Id
 
  const isLoggedIn = (Cookies.get("token")) ;    //using cookies

  const routeProtect = (element) => {
    return isLoggedIn ? <Navigate to="/dashBoard" /> : element;
  };

  const routeNotProtect = (element) => {
    return isLoggedIn ? element : <Navigate to="/loginForm" />;
  };

  return (
    <>
  <h1 className='bg-gray-600 text-white font-extrabold w-90 float-right py-3 px-3'>Welcome To Demo Page</h1>
 
 {/* <LoginForm /> */}
 <Router>
      <Routes>
        <Route path='/firstPage ' element={<FirstPage />}/>
        <Route path="/"  element={routeProtect(<SignupForm />)}/>
        <Route path="/loginForm" element={routeProtect(<LoginForm />)} />
        {/* <Route path="/dashBoard" element={<DashBoard />} /> */}
        
          <Route
          path="/dashBoard"
          element={routeNotProtect(<DashBoard isLoggedIn={isLoggedIn} />)}
        />
        <Route path="*" element={<Navigate to="/" />} />
      
      </Routes>
    </Router>
    </>
  )
}

export default App
