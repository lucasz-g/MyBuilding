import React from 'react';
import Login from './components/login/Login.js';
import Home from './components/home/Home.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
