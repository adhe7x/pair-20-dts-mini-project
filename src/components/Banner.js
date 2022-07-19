import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import instance from '../instance';
import requests from '../requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchOriginals);
            setMovie(request.data.results
                [
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function shortDesc(description, words) {
        return description?.length > words ? description.substr(0, words - 1) + "..." : description;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                   "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                   )`,
                backgroundPosition: "center center",
                }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                <h1 className='banner__description'>
                    {shortDesc(movie?.overview, 200)}
                </h1>
            </div>
            <div className='banner__fade' />

        </header>
    )
}

export default Banner;