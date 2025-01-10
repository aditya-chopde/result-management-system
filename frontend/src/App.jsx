import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateSchool from './components/CreateSchool';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CreateSchool/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
