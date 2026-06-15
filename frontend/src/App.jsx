import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import { use } from 'react';
import useGetCurrentUser from './hooks/useGetCurrentUser';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
export const serverUrl ="http://localhost:8000";

function App() {
  useGetCurrentUser();
  const {userData} = useSelector(state=>state.user);
  return (
    <Routes>
      <Route path="/signup" element={!userData?<SignUp />:<Navigate to={"/"}/>} />
      <Route path="/signin" element={!userData?<SignIn />:<Navigate to={"/"}/>} />
      <Route path="/forgot-password" element={!userData?<ForgotPassword />:<Navigate to={"/"}/>} />
      <Route path="/" element={userData?<Home/>:<Navigate to="/signin" />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
}

export default App;