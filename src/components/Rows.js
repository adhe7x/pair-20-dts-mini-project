import React from 'react';
import requests from '../requests';
import Row from './Row';


function Rows() {
    return (
        <div>
            <Row title="Populars" fetchUrl={requests.fetchTrending}/>     
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row 
              title="Originals"
              fetchUrl={requests.fetchOriginals}
              isOriginal
            />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Rows;