
import { useEffect } from "react";
import { url_header } from "../utils/url_header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
        const movies = async () =>{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', url_header)
            const json = await data.json();
            const res = (!json) ? null : json.results;
            dispatch(addNowPlayingMovie(res))
        }
    useEffect(()=>{movies()},[]);
}
export default useNowPlayingMovies;