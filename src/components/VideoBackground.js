import { useEffect } from "react";
import { url_header } from "../utils/url_header";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie, addTrailerVideo } from "../utils/movieSlice";
import useMainMovie from "../hooks/useMainMovie";

const VideoBackground = ({movieId}) =>{
    useMainMovie(movieId);
    const trailerKey = useSelector((store)=> store.movies?.mainMovie?.key);
    return(
        <div className=" ">
            <iframe className="w-screen aspect-video"   src={"https://www.youtube.com/embed/"+trailerKey+"?autoplay=1&mute=1&modestbranding=0&rel=0&autohide=1&showinfo=0&controls=0"}    ></iframe>
            </div>
    )
}
export default VideoBackground;