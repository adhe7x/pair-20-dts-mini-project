import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import instance from '../instance';
import requests from '../requests';

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
                <h1>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className='button__contents'>
                    <button className='button__content'>Play</button>
                    <button className='button__content'>My List</button>
                </div>

                <h1 className='banner__description'>
                    {movie?.overview}
                </h1>
            </div>

        </header>
    )
}

export default Banner;