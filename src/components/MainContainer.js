import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useEffect } from "react";
import { addNowPlayingMovie, addTrailerVideo } from "../utils/movieSlice";

const MainContainer = () =>{
    const movies  = useSelector(store => store.movies?.nowPlayingMovies)
    const dispatch = useDispatch();
    if(!movies[0]){return;}
    const {id,title,overview} = movies[0];
    return(
        <div className=" flex ">
            <VideoBackground movieId={id} className="w-screen "/>
            <VideoTitle className="text-white  w-screen" title={title} description={overview}/>
        </div>
    );
}
export default MainContainer;