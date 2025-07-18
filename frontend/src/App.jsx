  import { useState } from 'react'
  import './styles.css'
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Login from './pages/Login';
  import Register from './pages/Register';
  import Dashboard from './pages/Dashboard';

  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
