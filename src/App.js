import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';

function App() {

  return (
    <div className="app">
      <Router>
        <Route path="/" element={<HomeScreen />}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
