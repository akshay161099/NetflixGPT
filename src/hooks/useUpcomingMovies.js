import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { url_header } from '../utils/url_header';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const movies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',url_header);
    const json = await data.json();
    const res = (!json)?null:json.results;
    dispatch(addUpcomingMovies(res));
  }
  useEffect(()=>{movies()},[]);
}

export default useUpcomingMovies