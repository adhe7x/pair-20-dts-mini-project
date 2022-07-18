import React from 'react';
import './App.css';
import Row from '../src/components/Row';
import requests from '../src/requests';

function App() {
  return (
    <div className="App">
     <Row title="Populars" fetchUrl={requests.fetchTrending}/>     
     <Row title="Top 10 Indonesia Movies" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Originals" fetchUrl={requests.fetchOriginals} isOriginal />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />   
    </div>
  );
}

export default App;
