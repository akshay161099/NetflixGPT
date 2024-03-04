import { useEffect } from "react";
import { url_header } from "../utils/url_header";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie, addTrailerVideo } from "../utils/movieSlice";

const useMainMovie = (movieId) =>{
    const dispatch = useDispatch();
    const movies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", url_header);
        const json = await data.json();
        const filterData = json?.results.filter((video)=> video.type === "Clip")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        const res = (!json) ? null : json.results;
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        movies();
    },[]);
}
export default useMainMovie;