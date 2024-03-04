import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { url_header } from '../utils/url_header';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const gettingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',url_header);
      const json = await data.json();
      const res = (!json)?null:json.results;
      dispatch(addPopularMovies(res))
    }
    useEffect(()=>{gettingMovies()},[])
}

export default usePopularMovies