import { IMG_CDN_URL } from "../Utils/Contants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 md:w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="movie card image" />
    </div>
  );
};

export default MovieCard;
