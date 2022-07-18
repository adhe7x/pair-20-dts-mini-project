import React, { useEffect, useState } from 'react';
import instance from '../instance';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isOriginal}){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {

        //jika [], run sekali ketika ngeload row, dan tidak run lagi

        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return(
        <div className='row'>
            <h2>{title}</h2>
            
            <div className='row__posters'>

                {movies.map(movie =>(
                    <img
                        key={movie.id}
                        className={`row__poster ${isOriginal && 'row__posterLarge'}`}
                        src={`${base_url}${ isOriginal ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
                      
        </div>
    )
};

export default Row;