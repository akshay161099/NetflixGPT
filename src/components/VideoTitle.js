const VideoTitle = ({title,description}) =>{
    return(
        <div className=" pt-[20%] pl-10 aspect-video absolute bg-gradient-to-r from-black">
            <div className="w-1/2">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="pt-4 text-white">{description}</p>
            <button className="bg-gray-800 m-2 px-4 py-1 rounded-md text-white text-2xl hover:opacity-80">
                Play
            </button>
            <button className="bg-gray-300 m-2 px-4 py-1 rounded-md text-black text-2xl hover:opacity-80">More info</button>
            </div>
            
        </div>
    )
}
export default VideoTitle;