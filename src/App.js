import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Rows from './components/Rows';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Rows />}>
        </Route>
      </Routes>
      <Footer />     
    </div>
  );
}

export default App;
