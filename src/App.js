import React from 'react';
import './App.css';
import Row from '../src/components/Row';
import requests from '../src/requests';

function App() {
  return (
    <div className="App">
     <Row title="Popular" fetchUrl={requests.fetchTrending} />
     <Row title="Original" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top 10 Indonesia Movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
