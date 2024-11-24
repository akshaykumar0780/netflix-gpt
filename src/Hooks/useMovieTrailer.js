import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Contants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filterTrailer);

    const trailer = filterTrailer.length ? filterTrailer[3] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
