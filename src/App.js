import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Rows from './components/Rows';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Rows />}>
        </Route>
      </Routes>
         
    </div>
  );
}

export default App;
