import MovieCard from '../components/MovieCard';
import Box from '@mui/material/Box';

const MovieList = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space between',
            flexWrap: 'wrap',
        }}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Box>
    )
}

export default MovieList;