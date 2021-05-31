import React, { useState } from 'react';

function Movies() {
    const dummyMovies = [{
        id: 'sholey',
        name: 'Sholey',
        releaseDate: 'Nov 1978'
    }, {
        id: 'ddlj',
        name: 'DDLJ',
        releaseDate: 'Dec 1990'
    }];
    const [movies, setMovies ] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchMoviesHandler() {
        setIsLoading(true);
        const response = await fetch('https://swapi.dev/api/films/')
        const data = await response.json()

        const tranformed = data.results.map((movie: any) => {
            return {
                id: movie.episode_id,
                name: movie.title,
                releaseDate: movie.release_date
            };
        })
        setMovies(tranformed);
        setIsLoading(false);
    }

    return <div>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {
            !isLoading &&
            <ul>
                {
                    movies.map(movies => {
                        return <li>{movies.name}</li>
                    })
                }
            </ul>
        }
        { isLoading && <p>Loading...</p>}
        

    </div>
}

export default Movies;
