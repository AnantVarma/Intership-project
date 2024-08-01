import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import Login from './components/Login';
import Description from './components/Description';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
       <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      </div>
    </Router>
  );
}

export default App;
