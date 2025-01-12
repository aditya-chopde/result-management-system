import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateSchool from './components/CreateSchool';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import AddResult from './components/AddResult';
import SeeResult from './components/SeeResult';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CreateSchool/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
        <Route path="/add/student/:id" element={<AddStudent/>} />
        <Route path="/edit/student/:id" element={<EditStudent/>} />
        <Route path="/add/result/:id" element={<AddResult/>} />
        <Route path="/s/result" element={<SeeResult/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
