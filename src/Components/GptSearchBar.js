import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import client from "../Utils/openAi";
import { API_OPTIONS, GEMINIAI_KEY } from "../Utils/Contants";
import { addGptMovieResult } from "../Utils/gptSlice";
import { genAI } from "../Utils/geminiAi";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    //make an API call to GPT AI to get movie results

    const prompt =
      "Act as a Movie Recommendation systema and suggest some movie for the query : " +
      searchText.current.value +
      ". only give me name of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gya";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const gptMovies =
      response.candidates?.[0]?.content?.parts?.[0]?.text.split(",");

    console.log(gptMovies);

    // For each movie, search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full  md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
