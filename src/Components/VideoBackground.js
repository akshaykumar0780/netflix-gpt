

import {  useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


export default function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId)

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/hRFY_Fesa9Q?si=tHLRwWtsBn8aAko2" +
          trailerVideo?.key+"&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
}
