import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
          {!user ? (
          <LoginScreen />) : (
              <Route path="/home" element={<HomeScreen />}>
              </Route>
          )}
      </Router>
    </div>
  );
}

export default App;
