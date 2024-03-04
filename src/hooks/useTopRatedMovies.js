import React, { useEffect } from 'react'
import { url_header } from '../utils/url_header';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
  const movies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',url_header);
    const json = await data.json();
    const res = (!json)?null:json.results;
    dispatch(addTopRatedMovies(res));
  }
  useEffect(()=>{movies()},[]);
}

export default useTopRatedMovies