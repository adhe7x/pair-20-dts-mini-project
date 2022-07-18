import React, { useEffect, useState } from "react";
import instance from "../instance";

function Row({title, fetchUrl}){
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
        <div>
            <h2>{title}</h2>
            
            <div className="row_poster">
                {movies.map(movie =>(
                    <img src={movie} alt={movie.name} />
                ))}
            </div>
                      
        </div>
    )
};

export default Row;