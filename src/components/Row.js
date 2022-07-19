import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube";
import instance from '../instance';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isOriginal}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {

        //jika [], run sekali ketika ngeload row, dan tidak run lagi

        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "480",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title)
            .then((url) => {
                // https://www.youtube.com/watch?v=Isb7Q4jEA04
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log(setTrailerUrl);
            })
            .catch((error) => console.log(error));
        }
    }

    return(
        <div className='row'>
            <h2>{title}</h2>
            
            <div className='row__posters'>

                {movies.map((movie) =>(
                    <img
                        key={movie.id}
                        onClick={ () => handleClick(movie)}
                        className={`row__poster ${isOriginal && 'row__posterLarge'}`}
                        src={`${base_url}${ isOriginal ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}          
        </div>
    )
};

export default Row;