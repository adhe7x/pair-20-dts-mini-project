import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomeScreen />}>        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
