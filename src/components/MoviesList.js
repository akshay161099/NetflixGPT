import React from 'react'
import { useSelector } from 'react-redux';
import MoviesCard from './MoviesCard';

const MoviesList = ({title,movies}) => {
  return (
    <div className='pl-2 '>
        <h1 className='text-white text-xl'>{title}</h1>
    <div className=' flex overflow-x-scroll pr-2 pt-2'>
        {movies.map(movie => <MoviesCard key={movie.id} poster_path={movie.poster_path}/>)}
    </div>
    </div>
  )
}
export default MoviesList;