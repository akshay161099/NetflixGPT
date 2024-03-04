import React, { useEffect } from 'react'
import MoviesList from './MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { url_header } from '../utils/url_header';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  return (
    <div className='-mt-32 relative z-20'>
        <div className=''>
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Popular"} movies={movies.popularMovies}/>
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        </div>
        
    </div>
  )
}

export default SecondaryContainer;